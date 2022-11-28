import { useEffect, useMemo, useState } from 'react';
import { ChartSeriesData, FilterData, SalesByGender } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { buildChartSeries, sumSalesByGender } from './helpers';
import './styles.css';

type Props = {
  filterData?: FilterData;
};

function SalesByGenderComponent({ filterData }: Props) {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newChartSeries = buildChartSeries(response.data);
        setChartSeries(newChartSeries);
        const newTotalSum = sumSalesByGender(response.data);
        setTotalSum(newTotalSum);
      })
      .catch(() => {
        console.error('Error to fetch sales by gender');
      });
  }, [params]);

  return (
    <div className="sales-by-store-container base-card">
      <div className="sales-by-store-data">
        <div className="sales-by-store-quantity-container">
          <h2 className="sales-by-store-quantity">{formatPrice(totalSum)}</h2>
          <span className="sales-by-store-quantity-label">Total de vendas</span>
        </div>
        <div className="sales-by-store-chart"></div>
      </div>
    </div>
  );
}

export default SalesByGenderComponent;

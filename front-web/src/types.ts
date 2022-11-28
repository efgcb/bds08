export type SalesByGender = {
  gender: string;
  sum: number;
};

export type Store = 'Araguari' | 'Ituiutaba' | 'Uberaba' | 'Uberlândia';
/*


export type FilterData = {
  id: number;
  name: string;
};


*/

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterData = {
  store?: Store;
};

export type PieChartConfig = {
  labels?: string[];
  series?: number[];
};

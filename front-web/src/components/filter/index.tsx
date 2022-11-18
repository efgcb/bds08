import './styles.css';

function Filter() {
  return (
    <div className="filter-container base-card">
      <select className="filter-input">
        <option value="">Selecione uma loja</option>
        <option value="Araguari">Araguari</option>
      </select>
    </div>
  );
}

export default Filter;

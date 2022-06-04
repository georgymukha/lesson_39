import './ControlItem.css';

const ControlItem = ({ type, title, count, add, remove }) => {
  return (
    <div className="pizza-control__item" onClick={add}>
      <img
        src={`img/${type}-icon.png`}
        alt={type}
        className="pizza-control__img"
      />
      <h4 className="pizza-control__title">{title}</h4>
      {count ? <div className="ingredient-count" onClick={remove}>{count}</div> : null}
    </div>
  );
};
export default ControlItem;

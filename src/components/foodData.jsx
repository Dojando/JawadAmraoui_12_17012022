

function FoodData(props) {
  return (
    <div className="food-data">
      <div className="food-data-container">
        <img src={ props.logo } alt="logo de donnée alimentaire" />
        <div className="food-quantity-container">
          <p className="food-quantity">{props.value}{props.unit}</p>
          <p className="food-type">{props.type}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodData;

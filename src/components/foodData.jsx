

function FoodData(props) {
  return (
    <div className="food-data">
      <div className="food-data-container">
        <img src={ props.logo } alt="logo de donnée alimentaire" />
        <div className="food-quantity-container">
          <p className="food-quantity">1,930kCal</p>
          <p className="food-type">Calories</p>
        </div>
      </div>
    </div>
  );
}

export default FoodData;

import PropTypes from 'prop-types';

/**
 * render FoodData component
 * @param { string } logo
 * @param { number } value
 * @param { string } type
 * @param { string } unit
 * return {ReactElement}
 */
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

FoodData.propTypes = {
  logo: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired
}

export default FoodData;

import { useState } from 'react';

// The `PizzaBlock` component receives two props: `title` and `prise`
function PizzaBlock({ title, prise }) {
  // Initialize the state for pizza count with 0
  const [pizzaCount, setPizzaCount] = useState(0);

  // This function increments the pizza count by 1 when the button is clicked
  const onClickAdd = () => {
    setPizzaCount(pizzaCount + 1);
  };

  return (
    <div className="pizza-block">
      {/* Pizza image */}
      <img
        className="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      {/* Pizza title */}
      <h4 className="pizza-block__title">{title}</h4>
      {/* Pizza selector with two lists for crust type and size */}
      <div className="pizza-block__selector">
        <ul>
          <li className="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li className="active">26 см.</li>
          <li className="active">30 см.</li>
          <li className="active">40 см.</li>
        </ul>
      </div>
      {/* Bottom section displaying the price and an "Add" button */}
      <div className="pizza-block__bottom">
        {/* Price of the pizza */}
        <div className="pizza-block__price">от {prise} ₽</div>
        {/* Button to add the pizza to the cart */}
        <button onClick={onClickAdd} className="button button--outline button--add">
          {/* SVG icon for the "Add" button */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          {/* "Add" button label */}
          <span>Добавить</span>
          {/* Display the current pizza count */}
          <i>{pizzaCount}</i>
        </button>
      </div>
    </div>
  );
}

// Export the `PizzaBlock` component for use in other modules
export default PizzaBlock;


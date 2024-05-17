import React from 'react';
import './scss/app.scss'; // Importing the app's SCSS file

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from "./components/PizzaBlock";

// App component is the main component that renders the application
function App() {
    return (
        <div className="wrapper"> {/* Wrapper div to wrap the entire content */}
            <Header/>
            <div className="content"> {/* Content div that contains the main application content */}
                <div className="container"> {/* Container div to apply consistent styling */}
                    <div className="content__top"> {/* Top section of the content */}
                        <Categories/> {/* Component to render categories */}
                        <Sort/> {/* Component to render sorting options */}
                    </div>
                    <h2 className="content__title">Все пиццы</h2> {/* Title for the 'All Pizzas' section */}
                    <div className="content__items"> {/* Div to contain all the PizzaBlock components */}
                        <PizzaBlock title={"Мексиканская"} prise={500}/> {/* PizzaBlock component with title and price */}
                        <PizzaBlock title={"eee"} prise={333}/> {/* PizzaBlock component with title and price */}
                        <PizzaBlock/> {/* PizzaBlock component without any props */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


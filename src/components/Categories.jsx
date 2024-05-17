import React from "react";

// Categories component manages the selection of categories for pizzas
function Categories() {
    // Use local state to keep track of the active category index
    const [activeIndex, setActiveIndex] = React.useState(0);

    // onClickCategory handles setting the active index when a category is clicked
    const onClickCategory = (index) => {
        setActiveIndex(index)
    }

    // Render the categories as list items, applying the "active" class if the index matches the active index
    return (
        <div className="categories">
            <ul>
                <li onClick={() => onClickCategory(0)} className={activeIndex === 0 ? "active" : ''}>Все</li>
                <li onClick={() => onClickCategory(1)} className={activeIndex === 1 ? "active" : ''}>Мясные</li>
                <li onClick={() => onClickCategory(2)} className={activeIndex === 2 ? "active" : ''}>Вегетарианская</li>
                <li onClick={() => onClickCategory(3)} className={activeIndex === 3 ? "active" : ''}>Гриль</li>
                <li onClick={() => onClickCategory(4)} className={activeIndex === 4 ? "active" : ''}>Острые</li>
                <li onClick={() => onClickCategory(5)} className={activeIndex === 5 ? "active" : ''}>Закрытые</li>
            </ul>
        </div>
    )
}

export default Categories;

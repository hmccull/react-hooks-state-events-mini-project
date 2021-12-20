import React from "react";

function CategoryFilter({ categories, selectedCategory, onSetSelectCategory }) {
  console.log(categories)

  const btnElements = categories.map(cat => {
    const className = cat === selectedCategory ? 'selected' : null;
    return (
    <button 
      key={cat}
      className={className}
      onClick={() => onSetSelectCategory(cat)} 
    >
      {cat}
    </button>
    );
  });
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btnElements}
    </div>
  );
}

export default CategoryFilter;

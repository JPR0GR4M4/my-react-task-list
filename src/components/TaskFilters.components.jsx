const FiltersContainer = ({ children }) => {
  return (
    <div className="flex items-center justify-between mt-2 p-3 rounded-lg border border-white bg-transparent">
      {children}
    </div>
  );
};

const ItemsLeft = ({ total }) => {
  return (
    <p className="text-gray-400 text-sm">
      <span className="text-white">{total}</span> Items left
    </p>
  );
};

const FilterButtonContainer = ({ children }) => {
  return <div className="flex items-center space-x-2">{children}</div>;
};

const FilterButton = ({ action, active, filter }) => {
  return (
    <button
      onClick={action}
      className={
        ` hover:text-white cursor-pointer transition-all duration-300 ease-in-out ` +
        (active.toLowerCase().includes(filter.toLowerCase())
          ? "text-white"
          : "text-gray-400")
      }
    >
      {filter}
    </button>
  );
};

export { ItemsLeft, FiltersContainer, FilterButtonContainer, FilterButton };

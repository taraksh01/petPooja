import Search from "./Search";

const Header = ({
  searchText,
  handleSearch,
  filteredRestaurants,
  setFilteredRestaurants,
  allRestaurants,
}) => {
  return (
    <header className="flex justify-between items-center bg-gray-300 p-2">
      <h1 className="text-5xl">logo</h1>
      <Search
        searchText={searchText}
        handleSearch={handleSearch}
        filteredRestaurants={filteredRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
        allRestaurants={allRestaurants}
      />
      <nav className="flex gap-4 text-xl">
        <p>Offer</p>
        <p>Cart</p>
      </nav>
    </header>
  );
};

export default Header;

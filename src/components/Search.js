import { filterData } from "../utils/helper";

const Search = ({
  searchText,
  handleSearch,
  setFilteredRestaurants,
  allRestaurants,
}) => {
  return (
    <div className="flex gap-4 font-normal m-4">
      <input
        className="outline-none bg-transparent border-b-gray-600 border-b px-1 text-xl w-56 "
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <button
        className="text-xl flex justify-center items-center border-2 border-gray-500  rounded-lg px-3 "
        type="submit"
        onClick={() => {
          const newRestaurants = filterData(searchText, allRestaurants);
          setFilteredRestaurants(newRestaurants);
        }}
      >
        Search
      </button>
    </div>
  );
};
export default Search;

const Search = ({ searchText, handleSearch }) => {
  return (
    <div className="flex gap-4 font-normal">
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
        onClick={() => console.log(searchText)}
      >
        Search
      </button>
    </div>
  );
};
export default Search;

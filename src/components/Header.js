import Search from "./Search";

const Header = ({ searchText, handleSearch }) => {
  return (
    <header className="flex justify-between items-center bg-gray-300 p-2">
      <h1 className="text-5xl">logo</h1>
      <Search searchText={searchText} handleSearch={handleSearch} />
      <nav className="flex gap-4 text-xl">
        <p>Offer</p>
        <p>Cart</p>
      </nav>
    </header>
  );
};

export default Header;

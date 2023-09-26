import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 flex flex-col justify-center items-center p-3">
      <div className="text-white flex p-3 gap-4">
        <Link to={"/about"} className="">
          About us
        </Link>
        <Link to={"/contact"} className="">
          Contact us
        </Link>
      </div>
      <div className="text-orange-400">taraksh01</div>
    </footer>
  );
};

export default Footer;

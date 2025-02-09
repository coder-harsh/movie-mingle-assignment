import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.jpg";
import MobMenu from "./MobileMenu";


const Navigation = () => {
    return (
        <nav className="flex flex-row justify-between px-8 py-4 items-center border-b-[1px] navbar">
            <div>
                <Link to="/">
                    <img src={logo} alt="Movie Mingle" className="w-40 h-14" />
                </Link>
            </div>
            <div className="hidden md:flex">
                <ul className="flex flex-row font-semibold">
                    <li> <NavLink to={"/"} className="text-navcol mx-5 hover:text-red-400">Home</NavLink></li>
                    <li> <NavLink to={"/about"} className="text-navcol mx-5 hover:text-red-400">About</NavLink></li>
                    <li> <NavLink to={"https://github.com/coder-harsh/movie-mingle-assignment/issues"} target="_blank" className="text-navcol mx-5 hover:text-red-400">Raise Issue?</NavLink></li>
                </ul>
            </div>
            <div className="hidden md:flex">
                <Link to={"tel:7667430491"}>
                    <button className="bg-red-400 px-4 py-2 rounded text-white flex justify-center items-center hover:opacity-85 font-semibold">
                        Explore
                    </button>
                </Link>
            </div>
            <MobMenu />
        </nav >
    );
};
export default Navigation;
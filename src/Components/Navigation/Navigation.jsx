import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.webp";
import MobMenu from "./MobileMenu";


const Navigation = () => {
    return (
        <nav className="flex flex-row justify-between px-8 py-6 items-center border-b-[1px]">
            <div>
                <Link to="/">
                    <img src={logo} alt="" className="w-32" />
                </Link>
            </div>
            <div className="hidden md:flex">
                <ul className="flex flex-row font-semibold">
                    <li> <NavLink to={"/"} className="text-navcol mx-5 hover:text-red-400">Home</NavLink></li>
                    <li> <NavLink to="/movies" className="text-navcol mx-5 hover:text-red-400">Movies</NavLink></li>
                    <li> <NavLink to={"https://blog.indiandevelopers.org"} target="_blank" className="text-navcol mx-5 hover:text-blue-400">Blog</NavLink></li>
                    <li> <NavLink to={"/about"} className="text-navcol mx-5 hover:text-red-400">About</NavLink></li>
                    <li> <NavLink to={"/contact"} className="text-navcol mx-5 hover:text-red-400">Contact</NavLink></li>
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
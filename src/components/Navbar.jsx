import logo from "../assets/sa-logo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6" >
            <div className="flex flex-shrink-0 items-center ">
                <img className="mx-2 w-8 cursor-pointer" src={logo} alt="logo"
                 />
            </div>
            <div className="flex flex-center justify-center gap-4 text-2xl ">
            <FaLinkedin className="cursor-pointer"/>
            <FaGithub  className="cursor-pointer"/>
                <FaInstagram  className="cursor-pointer"/>
                <FaTwitter  className="cursor-pointer"/>
            </div>
        </nav>
    );
}

export default Navbar;  
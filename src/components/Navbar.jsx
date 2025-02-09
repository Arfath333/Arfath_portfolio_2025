import logo from "../assets/sa-logo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
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
            <a
      href="https://www.linkedin.com/in/syed-arfath-ab39a3205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-blue-800 transition-colors"
    >
            <FaLinkedin className="cursor-pointer" />
            </a>
            <a
      href="https://github.com/Arfath333"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-blue-800 transition-colors"
    >
            <FaGithub  className="cursor-pointer"/>
            </a>
            <a href="https://app.netlify.com/teams/arfath333/sites" target="_blank" rel="noopener noreferrer">
      <SiNetlify className="text-white text-3xl hover:text-blue-800" />
    </a>
            <a
      href="https://www.instagram.com/syed_arfath3?igsh=MWVoMjNrbmN3bXdibg=="
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-blue-800 transition-colors"
    >
                <FaInstagram  className="cursor-pointer"/>
                </a>
                <a
      href=""
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-blue-800 transition-colors"
    >
                <FaTwitter  className="cursor-pointer"/>
    </a>
            </div>
        </nav>
    );
}

export default Navbar;  
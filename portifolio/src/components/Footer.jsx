import { FaGithub,FaLinkedin  } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";


export function Footer() {
  return (
    <footer className="footer" id="footer">
      <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      <div className="card-footer">
        <a href="mailto:gabrielhmsena20@gmail.com" target="_blank" rel="noopener noreferrer">
          <div className="footer-contact">
            <MdAlternateEmail size={40} className="iconStyle"/>
            gabrielhmsena20@gmail.com
          </div>
        </a>
        <a href="https://github.com/NeoPato" target="_blank" rel="noopener noreferrer">
          <div className="footer-contact">
            <FaGithub size={40} className="iconStyle"/>
            https://github.com/NeoPato
          </div>
        </a>
        <a href="https://www.linkedin.com/in/gabriel-henrique-985311294/" target="_blank" rel="noopener noreferrer">
          <div className="footer-contact">
            <FaLinkedin size={40} className="iconStyle"/>
            gabriel-henrique-985311294
          </div>
        </a>
      </div>
    </footer>
  );
}
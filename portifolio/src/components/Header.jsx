import { FaWhatsapp } from "react-icons/fa";

export function Header() {

  return (
    <>
      <header className="header">
        <div className="header-content">
          <nav>
            <ul>
              <li><a href="#contact">Sobre</a></li>
              <li><a href="#skills">Habilidades</a></li>
              <li><a href="#footer">Contato</a></li>
              <div className="header-button">
                <FaWhatsapp size={30} color="white"/>
                <a href="https://wa.me/+554184666011?text=Olá,%20gostaria%20de%20mais%20informações" target="_blank">
                  <b><button>WhatsApp</button></b>
                </a>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
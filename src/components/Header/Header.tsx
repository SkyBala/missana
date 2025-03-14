import { FC } from 'react';
import './Header.css';
import logo from '../../assets/headerLogo.svg';
const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a href="/" className="header__logo">
            <img src={logo} alt="MS Logo" />
          </a>
          <nav className="header__nav">
            <a href="#about" className="header__link">О фабрике</a>
            <a href="#services" className="header__link">Наши услуги</a>
            <a href="#catalog" className="header__link">Что мы шьем?</a>
          </nav>
          <a href="#contact" className="header__button">Связаться</a>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { FC } from 'react';
import './Footer.css';
import telegram from '../../assets/telega.svg';
import whatsapp from '../../assets/socials.svg';
import instagram from '../../assets/insta.svg';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__contact">
            <h3 className="footer__title">Как С Нами Связаться?</h3>
            <p className="footer__subtitle">Обсудите ваш проект с нами!</p>
          </div>

          <div className="footer__info">
            <h4 className="footer__info-title">Контакты:</h4>
            <div className="footer__info-content">
              <p className="footer__phone">Phone : +996 705 919 917</p>
              <p className="footer__email">Email : @example.com</p>
            </div>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Навигация</h4>
            <div className="footer__nav-content">
              <a href="#about" className="footer__nav-link">О фабрике</a>
              <a href="#services" className="footer__nav-link">Наши услуги</a>
            </div>
          </div>

          <div className="footer__social">
            <h4 className="footer__social-title">Мы в соц. сетях</h4>
             <div className="footer__social-links">
              <a href="#" className="footer__social-link">
                <img src={telegram} alt="Telegram" />
              </a>
              <a href="#" className="footer__social-link">
                <img src={whatsapp} alt="WhatsApp" />
              </a>
              <a href="#" className="footer__social-link">
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
            <p className="footer__social-subtitle">Подписывайтесь чтобы не пропустить новости</p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

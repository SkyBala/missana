import { FC } from 'react';
import './Services.css';
import tshirtIcon from '../../assets/account_child.svg';
import brandIcon from '../../assets/apparel.svg';
import hangerIcon from '../../assets/stylerAbout.svg';

const Services: FC = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="services__title">Кому полезны наши услуги</h2>
        
        <div className="services__grid">
          <div className="services__item">
            <div className="services__icon">
              <img src={tshirtIcon} alt="Оптовики" />
            </div>
            <h3>Оптовики</h3>
            <p>
              Если ищете одежду для перепродажи и хотите на этом зарабатывать, или хотите продавать свой 
              бренд одежды оптом, тогда мы поможем вам запуском бренда или предоставим каталог 
              готовых моделей!
            </p>
          </div>

          <div className="services__item">
            <div className="services__icon">
              <img src={brandIcon} alt="Сеть брендов" />
            </div>
            <h3>Сеть брендов</h3>
            <p>
              Вы продаёте свой бренд одежды в розницу в большом количестве? и хотите наладить 
              производство одежды ? тогда мы можем взять на себя всю работу пошива одежды ваших 
              брендов!
            </p>
          </div>

          <div className="services__item">
            <div className="services__icon">
              <img src={hangerIcon} alt="Селлеры" />
            </div>
            <h3>Селлеры</h3>
            <p>
              Вы продаете свой бренд одежды на Маркетплейсах? Тогда мы можем взять на себя 
              всю работу пошива вашего бренда под ключ! Чтобы вы могли фокусироваться на 
              продвижения товара, и масштабироваться.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

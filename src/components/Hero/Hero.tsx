import { FC } from 'react';
import './Hero.css';
import hero from '../../assets/hero.svg';
import arrow from '../../assets/ArrowDown.svg';
import hanger from '../../assets/styler.svg';

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              СТИЛЬ И
              КАЧЕСТВО
              В КАЖДОЙ ДЕТАЛИ
            </h1>
            <div className="hero__subtitle">
              <h2>
                ШВЕЙНАЯ<br />
                ФАБРИКА<br />
                "MISSANA"
              </h2>
            </div>
            <p className="hero__description">
              Современные технологии и качественные материалы для идеального результата.
            </p>
          </div>
          <div className="hero__image">
            <img src={hero} alt="Модель в черно-белом платье" />
          </div>
          <div className="hero__cards">
            <div className="hero__card">
              <div className="hero__card-header">
                <h3>Станьте нашим партнёром на Wildberries!</h3>
                <img src={arrow} alt="Стрелка" />
              </div>
              <p>
                Missana – это не только швейная фабрика, но и успешный селлер на Wildberries. 
                Мы знаем все нюансы продажи и предлагаем выгодные условия для совместной работы.
              </p>
            </div>
            <div className="hero__card">
              <div className="hero__card-header">
                <h3>Работаем официально и прозрачно!</h3>
                <img src={hanger} alt="Вешалка" />
              </div>
              <p>
                Missana – это производство, где каждая деталь соответствует законодательным 
                требованиям. Мы работаем по белой схеме, предоставляем всю необходимую 
                документацию и гарантируем легальность сотрудничества.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

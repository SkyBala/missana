import { FC } from 'react';
import './About.css';
import about from '../../assets/about.png';

const About: FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__left">
            <div className="about__image">
              <img src={about} alt="Выбор тканей" />
            </div>
            <div className="about__feature about__feature--united">
              <div className="feature-item">
                <h3>Современное оборудование</h3>
                <p>
                  Автоматизированные раскройные комплексы и вышивальные станки, 
                  обеспечивающие точность и скорость производства.
                </p>
              </div>
              <div className="feature-item">
                <h3>Качественные ткани и фурнитура</h3>
                <p>
                  Работаем только с проверенными поставщиками, выбирая лучшие 
                  материалы для долговечной и комфортной одежды.
                </p>
              </div>
            </div>
          </div>

          <div className="about__right">
            <div className="about__text">
              <h2 className="about__title">О бренде MISSANA</h2>
              <p className="about__description">
                Missana — это швейная фабрика, специализирующаяся на производстве 
                одежды по индивидуальным заказам. Мы работаем с различными материалами и 
                обеспечиваем высокое качество пошива.
              </p>
            </div>

            <div className="about__features">
              <div className="about__feature">
                <h3>Гибкость в работе с заказчиками</h3>
                <p>
                  Подстраиваемся под потребности клиентов: от индивидуального 
                  пошива до крупных партий, всегда соблюдая сроки.
                </p>
              </div>

              <div className="about__feature">
                <h3>Контроль качества на всех этапах производства</h3>
                <p>
                  Каждое изделие проходит строгую проверку, чтобы соответствовать 
                  высоким стандартам нашей фабрики.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { FC } from 'react';
import './Stats.css';
import statsImage from '../../assets/statsImg.png';
import clockIcon from '../../assets/ArrowDown.svg';
import qualityIcon from '../../assets/arrowDoble.svg';

const Stats: FC = () => {
  return (
    <section className="stats" id="stats">
      <div className="container">
        <div className="stats__content">
          <div className="stats__info">
            <h2 className="stats__title">
              Производственные<br />показатели<br />MISSANA
            </h2>
            <p className="stats__subtitle">
              Крупное производство с современными мощностями
            </p>

            <div className="stats__numbers">
              <div className="stats__number">
                <span className="stats__value">200+</span>
                <span className="stats__label">Площадь производства</span>
              </div>
              <div className="stats__number">
                <span className="stats__value">6000+</span>
                <span className="stats__label">Производственная мощность</span>
              </div>
              <div className="stats__number">
                <span className="stats__value">30+</span>
                <span className="stats__label">Количество сотрудников</span>
              </div>
            </div>

            <div className="stats__features">
              <div className="stats__feature">
                <span className="stats__feature-text">Работайте с профессионалами!</span>
                <span className="stats__feature-arrow">→</span>
              </div>
              <div className="stats__feature">
                <span className="stats__feature-text">От идеи до готового продукта!</span>
                <span className="stats__feature-arrow">→</span>
              </div>
              <div className="stats__feature">
                <span className="stats__feature-text">Гарантия качества и сроков!</span>
                <span className="stats__feature-arrow">→</span>
              </div>
            </div>
          </div>

          <div className="stats__image-container">
            <img src={statsImage} alt="Производство MISSANA" className="stats__image" />
            <div className="stats__badges">
              <div className="stats__badge">
                <img src={clockIcon} alt="Сроки" />
                <span>Соблюдаем сроки!</span>
              </div>
              <div className="stats__badge">
                <img src={qualityIcon} alt="Качество" />
                <span>Качество без компромиссов!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

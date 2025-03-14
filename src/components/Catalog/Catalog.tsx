import { FC } from 'react';
import './Catalog.css';
import dresses from '../../assets/catalog1.png';
import blouses from '../../assets/catalog2.png';
import pants from '../../assets/catalog3.png';
import shirts from '../../assets/catalog4.png';

const Catalog: FC = () => {
  return (
    <section className="catalog" id="catalog">
      <div className="container">
        <h2 className="catalog__title">Каталог продукции</h2>
        <h3 className="catalog__subtitle">Что мы шьём?</h3>
        <p className="catalog__description">Разнообразие моделей для любых нужд</p>

        <div className="catalog__grid">
          <div className="catalog__item">
            <div className="catalog__image-wrapper">
              <img src={dresses} alt="Женские платья" className="catalog__image" />
            </div>
            <div className="catalog__content">
              <h4 className="catalog__item-title">Женские платья</h4>
              <p className="catalog__item-description">
                Элегантные и стильные платья для любого случая. Мы создаём уникальные модели, которые подчёркивают индивидуальность и комфорт.
              </p>
            </div>
          </div>

          <div className="catalog__item">
            <div className="catalog__image-wrapper">
              <img src={blouses} alt="Женские блузки" className="catalog__image" />
            </div>
            <div className="catalog__content">
              <h4 className="catalog__item-title">Женские блузки</h4>
              <p className="catalog__item-description">
                Классические и современные фасоны, идеальные для делового и повседневного образа. Тонкие ткани и качественный крой обеспечивают удобство в носке.
              </p>
            </div>
          </div>

          <div className="catalog__item">
            <div className="catalog__image-wrapper">
              <img src={pants} alt="Женские брюки" className="catalog__image" />
            </div>
            <div className="catalog__content">
              <h4 className="catalog__item-title">Женские брюки</h4>
              <p className="catalog__item-description">
                От классических моделей до современных фасонов. Мы шьём брюки, сочетающие удобство и стиль, идеально подходящие для любого образа.
              </p>
            </div>
          </div>

          <div className="catalog__item">
            <div className="catalog__image-wrapper">
              <img src={shirts} alt="Женские рубашки" className="catalog__image" />
            </div>
            <div className="catalog__content">
              <h4 className="catalog__item-title">Женские рубашки</h4>
              <p className="catalog__item-description">
                Современные и стильные модели, подходящие как для работы, так и для повседневного ношения. Тщательная обработка деталей гарантирует идеальную посадку.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog; 
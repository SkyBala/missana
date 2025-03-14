import { FC } from 'react';
import './Reviews.css';
import avatar from '../../assets/ava1.png';
import star from '../../assets/stars.svg';

const Reviews: FC = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <h2 className="reviews__title">Отзывы клиентов</h2>
        <p className="reviews__subtitle">Мы гордимся сотрудничеством с нашими заказчиками.</p>

        <div className="reviews__grid">
          <div className="reviews__item">
            <div className="reviews__avatar">
              <img src={avatar} alt="Аватар" />
            </div>
            <p className="reviews__role">Селлер WB</p>
            <h3 className="reviews__name">Анна</h3>
            <div className="reviews__stars">
              <img src={star} alt="★" />
             
            </div>
            <p className="reviews__text">"Фабрика Missana воплотила мою коллекцию в жизнь! Качество на высоте!"</p>
          </div>

          <div className="reviews__item">
            <div className="reviews__avatar">
              <img src={avatar} alt="Аватар" />
            </div>
            <p className="reviews__role">Селлер WB</p>
            <h3 className="reviews__name">Иван</h3>
            <div className="reviews__stars">
              <img src={star} alt="★" />
             
            </div>
            <p className="reviews__text">"Работаем с Missana уже несколько лет — всегда точные сроки и безупречное качество!"</p>
          </div>

          <div className="reviews__item">
            <div className="reviews__avatar">
              <img src={avatar} alt="Аватар" />
            </div>
            <p className="reviews__role">Селлер WB</p>
            <h3 className="reviews__name">Эля Воробьева</h3>
            <div className="reviews__stars">
              <img src={star} alt="★" />
           
            </div>
            <p className="reviews__text">"Their kids' fashion line is adorable and comfortable. My children love their new outfits, and I appreciate the great quality and affordable prices."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 
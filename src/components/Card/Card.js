import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ title, price, imgUrl, onClickAdd, onClickFavorite }) => {
  const [isAdded, setIsAdded] = useState(false);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleAdded = () => {
    onClickAdd({ title, price, imgUrl });
    setIsAdded(!isAdded);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={handleFavorite}>
        <img
          src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
          alt='Unliked'
        />
      </div>
      <img width={133} height={112} src={imgUrl} alt='sneakers' />
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <img
          className={styles.plus}
          src={isAdded ? '/img/btn-checked.svg' : 'img/plus.svg'}
          alt='plus'
          onClick={handleAdded}
        />
      </div>
    </div>
  );
};

export default Card;

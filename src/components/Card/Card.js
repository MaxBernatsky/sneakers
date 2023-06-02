import styles from './Card.module.scss';

const Card = ({ title, price, imgUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src='/img/heart-unliked.svg' alt='Unliked' />
      </div>
      <img width={133} height={112} src={imgUrl} alt='sneakers' />
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <button className='button'>
          <img width={11} height={11} src='img/plus.svg' alt='plus' />
        </button>
      </div>
    </div>
  );
};

export default Card;

const Drawer = ({ onCloseCart, items = [] }) => {
  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2 className='d-flex justify-between mb-30'>
          Корзина
          <img
            className='removeBtn cu-p'
            src='/img/btn-remove.svg'
            alt='Close'
            onClick={onCloseCart}
          />
        </h2>
        <div className='items'>
          {items.map((item) => (
            <div className='cartItem d-flex align-center mb-20'>
              <img
                className='mr-20'
                width={70}
                height={70}
                src={item.imgUrl}
                alt='Sneakers'
              />
              <div className='mr-20 flex'>
                <p className='mb-5'>{item.title}</p>
                <b>{item.price}</b>
              </div>
              <img
                className='removeBtn'
                src='/img/btn-remove.svg'
                alt='Remove'
              />
            </div>
          ))}
        </div>
        <div className='cartTotalBlock'>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className='greenButton'>
            Оформить заказ <img src='/img/arrow.svg' alt='Arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Drawer from './components/Drawer/Drawer';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const [cardOpened, setCardOpened] = useState(false);

  useEffect(() => {
    fetch('https://647a51fca455e257fa649927.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItems(res);
      });
  }, []);

  return (
    <div className='wrapper clear'>
      {cardOpened && <Drawer onCloseCart={() => setCardOpened(false)} />}

      <Header onOpenCart={() => setCardOpened(true)} />

      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            <input type='text' placeholder='Поиск...' />
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onClickAdd={() => console.log('add')}
              onClickFavorite={() => console.log('favorite')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

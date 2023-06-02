import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Drawer from './components/Drawer/Drawer';

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imgUrl: '/img/sneakers/1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    imgUrl: '/img/sneakers/2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imgUrl: '/img/sneakers/3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imgUrl: '/img/sneakers/4.jpg',
  },
];

function App() {
  return (
    <div className='wrapper clear'>
      <Drawer />
      <Header />
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='Search' />
            <input type='text' placeholder='Поиск...' />
          </div>
        </div>
        <div className='d-flex'>
          {arr.map((item) => (
            <Card title={item.title} price={item.price} imgUrl={item.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

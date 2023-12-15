import React from 'react';
import './App.css';

// компоненти GoodsCard
function GoodsCard({ photo, name, price }) {
  return (
    <div className="goodsCard">
      <img src={photo} alt={name} className="goodsPhoto" />
      <h3 className="goodsName">{name}</h3>
      <p className="goodsPrice">{`Price: ${price} $`}</p>
    </div>
  );
}

function App() {
  // Список товарів
  const goodsList = [
    { id: 1, photo: 'https://i.pinimg.com/564x/4d/41/4f/4d414ff3308eafb306ba5600a00b7d94.jpg', name: 'Laptop', price: 1000 },
    { id: 2, photo: 'https://i.pinimg.com/564x/d7/8c/81/d78c8103fb69b0c6249343ba925e2ab8.jpg', name: 'Computer', price: 2000 },
    { id: 3, photo: 'https://i.pinimg.com/564x/07/90/3a/07903adbccb29363e726f9f752065222.jpg', name: 'Phone', price: 400 },
    { id: 4, photo: 'https://www.pngitem.com/pimgs/m/72-729571_free-vector-tango-input-mouse-cartoon-computer-mouse.png', name: 'Mouse', price: 30 },
    { id: 5, photo: 'https://i.pinimg.com/736x/1c/af/a0/1cafa09e8f4862c405e3c7fdfd721f8a.jpg', name: 'Keyboard', price: 50 },
    { id: 6, photo: 'https://i.pinimg.com/564x/e7/6b/1d/e76b1d590b0c76893a49cca057be2997.jpg', name: 'Printer', price: 300 },
  ];

  return (
    <div className="goodsGallery">
      {goodsList.map((goods) => (
        <GoodsCard
          key={goods.id}
          photo={goods.photo}
          name={goods.name}
          price={goods.price}
        />
      ))}
    </div>
  );
}

export default App;
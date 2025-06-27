import { useState } from 'react';
import ProductCard from './componts/ProductCard.tsx';
import ProductCardContainer from './componts/ProductCardContainer.tsx';
import './App.css';
import Navbar from './componts/Navbar.tsx';
import Cart from './componts/Cart.tsx';
import BoxCheck from './componts/Boxcheck';

type Product = {
  id: string;
  titulo: string;
  descripcion: string;
  src: string;
  price: number;
};

const products: Product[] = [
  {
    id: '1',
    titulo: 'hoodie versátil',
    descripcion: 'incalculable',
    src: 'https://i.pinimg.com/736x/5f/48/d5/5f48d510d5a4ba7eb278357af7b9ace8.jpg',
    price: 500,
  },
  {
    id: '2',
    titulo: 'God pantalon',
    descripcion: 'aumenta aura',
    src: 'https://i.pinimg.com/736x/30/c2/a6/30c2a69374c4dd7e8c32b4581f608422.jpg',
    price: 173,
  },
  {
    id: '3',
    titulo: 'hoodie stargazing',
    descripcion: 'fronteo de mas ',
    src: 'https://i.postimg.cc/ZnBhnR0Q/screenshot-51.png',
    price: 90,
  },
];

const productosHotSale: Product[] = [
  {
    id: '4',
    titulo: 'la mejor campera',
    descripcion: 'muy duradera',
    src: 'https://i.pinimg.com/736x/12/f7/c9/12f7c943e21fb18498cfed39943e4069.jpg',
    price: 510,
  },

  {
    id: '5',
    titulo: 'remera god',
    descripcion: 'especial para el invierno',
    src: 'https://i.pinimg.com/736x/de/43/78/de43787c3881ec7f960ec42c196dda06.jpg',
    price: 650,
  },
  {
    id: '6',
    titulo: 'Insano',
    descripcion: 'aura infinito',
    src: 'https://i.pinimg.com/736x/0a/9f/ba/0a9fba398513dcedae14f752701e6379.jpg',
    price: 230,
  },
];
const prendas2025: Product[] = [
  {
    id: '7',
    titulo: 'bermuda elix',
    descripcion: 'top bermudas',
    src: 'https://i.pinimg.com/736x/df/25/74/df2574543f55addb19c5866bdd5c7369.jpg',
    price: 550,
  },

  {
    id: '8',
    titulo: 'campera de cuero',
    descripcion: 'unica',
    src: 'https://i.pinimg.com/736x/8f/95/ee/8f95ee7ad4d036557d74c8347083ffcb.jpg',
    price: 150,
  },
  {
    id: '9',
    titulo: 'Campera con estilos',
    descripcion: 'Super Oferta',
    src: 'https://i.pinimg.com/736x/1d/cf/6e/1dcf6ed43a8888447ecb48ab9d43e32b.jpg',
    price: 350,
  },
];
const pantalonesoff: Product[] = [
  {
    id: '10',
    titulo: 'pantalon dde cueron',
    descripcion: 'el mejor pantalon de cuero para vestir 2025',
    src: 'https://i.pinimg.com/736x/52/73/ac/5273ac79a78cd856cba9aa88035cc64a.jpg',
    price: 193,
  },
  {
    id: '11',
    titulo: 'joggin',
    descripcion: 'goteas de flow ',
    src: 'https://i.pinimg.com/736x/98/f3/92/98f3927bce92a98613bfa2d33994224f.jpg',
    price: 201,
  },
  {
    id: '12',
    titulo: 'pantalon deportivo',
    descripcion: 'exelente pantalon para lo imprevisto',
    src: 'https://i.pinimg.com/736x/d5/02/90/d502900734775d5af023f423fba9bdb9.jpg',
    price: 193,
  },
];
const conjuntos2025: Product[] = [
  {
    id: '13',
    titulo: 'conjunto fuckfame',
    descripcion: '100% algondon tela 20.1',
    src: 'https://i.pinimg.com/736x/5d/41/4b/5d414bb8b65fd99a1ac28ace57e0b8fb.jpg',
    price: 263,
  },
  {
    id: '14',
    titulo: 'conjunto MARCH 8TH',
    descripcion: 'con ese color green sumas aura',
    src: 'https://i.pinimg.com/736x/10/74/de/1074debcd68f6005729d4e48ff0c36ca.jpg',
    price: 201,
  },
  {
    id: '15',
    titulo: 'conjunto YGS',
    descripcion: 'YounGadStreet de los mejores conjuntos',
    src: 'https://i.pinimg.com/736x/b4/02/e5/b402e53f7f8749a4855ab3a53d6a69e7.jpg',
    price: 402,
  },
];
const prendasinsanas: Product[] = [
  {
    id: '16',
    titulo: 'LOST SOULS',
    descripcion: '100% algondon tela 20.1',
    src: 'https://i.pinimg.com/736x/ad/1c/34/ad1c343a96c9b48da9b9729e2acb8d3d.jpg',
    price: 211,
  },
  {
    id: '17',
    titulo: 'REMERA AURA',
    descripcion: 'la remera lo dce todo ',
    src: 'https://i.pinimg.com/736x/81/7c/fc/817cfc3ba554156a05cb6659db29b7b6.jpg',
    price: 2500,
  },
  {
    id: '18',
    titulo: 'remera godines',
    descripcion: 'se pasa de aura ',
    src: 'https://i.pinimg.com/736x/51/5e/01/515e0104f8f6ec91bafd87280e2e83e8.jpg',
    price: 402,
  },
];
const shorts2025: Product[] = [
  {
    id: '19',
    titulo: 'Short me vs me',
    descripcion: '100% algondon isano',
    src: 'https://i.pinimg.com/736x/80/bb/a2/80bba215b5dd419da22d1fb18c9f4bb2.jpg',
    price: 112,
  },
  {
    id: '20',
    titulo: 'short trapstar',
    descripcion: 'super star',
    src: 'https://i.pinimg.com/736x/22/b6/4a/22b64a3ad916425d5a025ced6ba1b5f7.jpg',
    price: 299,
  },
  {
    id: '21',
    titulo: 'DEMIN TEARS',
    descripcion: 'LA MEJOR PRENDA DEL 2025',
    src: 'https://i.pinimg.com/736x/86/c2/f3/86c2f354756d4a4a421dab0a45b7c515.jpg',
    price: 183,
  },
];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filtros, setFiltros] = useState<string[]>([]);
  const [busqueda, setBusqueda] = useState('');
  const [cart, setCart] = useState<{
    [key: string]: { product: Product; quantity: number };
  }>({});

  const toggleFiltro = (filtro: string) => {
    setFiltros((prev) =>
      prev.includes(filtro)
        ? prev.filter((f) => f !== filtro)
        : [...prev, filtro]
    );
  };

  const filtrarProductos = (lista: Product[]) =>
    lista.filter((producto) => {
      const coincideBusqueda = producto.titulo
        .toLowerCase()
        .includes(busqueda.toLowerCase());
      const coincideFiltro =
        filtros.length === 0 ||
        (filtros.includes('Hot Sale') &&
          productosHotSale.some((p) => p.id === producto.id)) ||
        (filtros.includes('Conjuntos 2025') &&
          conjuntos2025.some((p) => p.id === producto.id)) ||
        (filtros.includes('OFERTA < 300') && producto.price < 300);
      return coincideBusqueda && coincideFiltro;
    });

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingItem = prev[product.id];
      if (existingItem) {
        return {
          ...prev,
          [product.id]: { product, quantity: existingItem.quantity + 1 },
        };
      }
      return { ...prev, [product.id]: { product, quantity: 1 } };
    });
  };

  const removeFromCart = (id: string) => {
    const newCart = { ...cart };
    delete newCart[id];
    setCart(newCart);
  };

  const increaseQuantity = (id: string) => {
    setCart((prev) => ({
      ...prev,
      [id]: { ...prev[id], quantity: prev[id].quantity + 1 },
    }));
  };

  const decreaseQuantity = (id: string) => {
    setCart((prev) => {
      const currentItem = prev[id];
      if (currentItem.quantity === 1) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
      return {
        ...prev,
        [id]: { ...currentItem, quantity: currentItem.quantity - 1 },
      };
    });
  };



  return (
    <>
      <Navbar  onCartToggle={() => setIsCartOpen(!isCartOpen)}
  cartItemCount={Object.values(cart).reduce((acc, item) => acc + item.quantity, 0)}
      />

      {isCartOpen && (
         <Cart
         items={Object.values(cart).map((item) => ({
           id: item.product.id,
           titulo: item.product.titulo,
           price: item.product.price,
           quantity: item.quantity,
         }))}
         onRemove={removeFromCart}
         onIncrease={increaseQuantity}
         onDecrease={decreaseQuantity}
       />
      )}
    

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <BoxCheck
          label="Hot Sale"
          value="Hot Sale"
          isChecked={filtros.includes('Hot Sale')}
          onChange={toggleFiltro}
        />
        <BoxCheck
          label="OFERTA a menos de $300"
          value="OFERTA < 300"
          isChecked={filtros.includes('OFERTA < 300')}
          onChange={toggleFiltro}
        />
        <BoxCheck
          label="Conjuntos 2025"
          value="Conjuntos 2025"
          isChecked={filtros.includes('Conjuntos 2025')}
          onChange={toggleFiltro}
        />
      </div>

      <div style={{ padding: '1rem', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            padding: '0.5rem',
            fontSize: '1rem',
            width: '100%',
            maxWidth: '400px',
          }}
        />
      </div>


      <ProductCardContainer>
  {filtrarProductos([
    ...products,
    ...productosHotSale,
    ...prendas2025,
    ...pantalonesoff,
    ...conjuntos2025,
    ...shorts2025,
    ...prendasinsanas,
  ]).map((product) => (
    <ProductCard
      key={product.id}
      titulo={product.titulo}
      descripcion={product.descripcion}
      src={product.src}
      price={product.price}
      onAddToCart={() => addToCart(product)}
      onRemoveFromCart={() => removeFromCart (product.id)}
      isInCart= {!!cart[product.id]}
    />
  ))}
</ProductCardContainer>
</> );
}
export default App;

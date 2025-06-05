import ProductCard from './componts/ProductCard.tsx';
import ProductCardContainer from './componts/ProductCardContainer.tsx';
import './App.css';
import Navbar from './componts/Navbar.tsx';

type Product = {
  id: string;
  titulo: string;
  descripcion: string;
  src: string;
  price: number;
};

type productosHotSale = {
  id: string;
  titulo: string;
  descripcion: string;
  src: string;
  price: number;
};
type prendas2025 = {
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

function App() {
  return (
    <>
      <Navbar />
      <h2 className="titulo-seccion">Lo mejor para el invierno - 50% OFF!</h2>
      <ProductCardContainer title="" description="">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            titulo={product.titulo}
            descripcion={product.descripcion}
            src={product.src}
            price={product.price}
          />
        ))}
      </ProductCardContainer>

      <h2>Hot Sale</h2>
      <ProductCardContainer title="" description="">
        {productosHotSale.map((product, index) => (
          <ProductCard
            key={index}
            titulo={product.titulo}
            descripcion={product.descripcion}
            src={product.src}
            price={product.price}
          />
        ))}
      </ProductCardContainer>

      <h2>Las mejores prendas 2025</h2>
      <ProductCardContainer title="" description="">
        {prendas2025.map((product, index) => (
          <ProductCard
            key={index}
            titulo={product.titulo}
            descripcion={product.descripcion}
            src={product.src}
            price={product.price}
          />
        ))}
      </ProductCardContainer>
    </>
  );
}

export default App;

import ProductCard from '../componts/ProductCard.tsx';
import ProductCardContainer from '../componts/ProductCardContainer.tsx';
import './Inicio.css';
import React from 'react';
import Navbar from '../componts/Navbar.tsx';
import BoxCheck from '../componts/Boxcheck';
import type { Product } from '../data/Product';
import { useCart } from '../pages/CartContext';
import {
  products,
  productosHotSale,
  prendas2025,
  pantalonesoff,
  conjuntos2025,
  shorts2025,
  prendasinsanas,
} from '../data/Product';

const allProducts: Product[] = [
  ...products,
  ...productosHotSale,
  ...prendas2025,
  ...pantalonesoff,
  ...conjuntos2025,
  ...shorts2025,
  ...prendasinsanas,
];

function Inicio() {
  const { cart, addToCart, removeFromCart, totalItems } = useCart();

  const [filtros, setFiltros] = React.useState<string[]>([]);
  const [busqueda, setBusqueda] = React.useState('');

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
        (filtros.includes('Oferta < 300') && producto.price < 300);
      return coincideBusqueda && coincideFiltro;
    });

  return (
    <>
      <Navbar cartItemCount={totalItems} />

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <BoxCheck
          label="Hot Sale"
          value="Hot Sale"
          isChecked={filtros.includes('Hot Sale')}
          onChange={toggleFiltro}
        />
        <BoxCheck
          label="Oferta a menos de  $300"
          value="Oferta < 300"
          isChecked={filtros.includes('Oferta < 300')}
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
        {filtrarProductos(allProducts).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            titulo={product.titulo}
            descripcion={product.descripcion}
            src={product.src}
            price={product.price}
            onAddToCart={() => addToCart(product)}
            onRemoveFromCart={() => removeFromCart(product.id)}
            isInCart={!!cart[product.id]}
          />
        ))}
      </ProductCardContainer>
    </>
  );
}

export default Inicio;

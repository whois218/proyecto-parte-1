import React from 'react';
import ProductCard from '../componts/ProductCard.tsx';
import ProductCardContainer from '../componts/ProductCardContainer.tsx';
import Navbar from '../componts/Navbar.tsx';
import BoxCheck from '../componts/Boxcheck';
import { useCart } from '../pages/CartContext';
import type { Product } from '../data/Product';
import { useProducts } from '../hooks/useProducts'; 

function Inicio() {
  const { cart, addToCart, removeFromCart, totalItems } = useCart();

  const [filtros, setFiltros] = React.useState<string[]>([]);
  const [busqueda, setBusqueda] = React.useState('');

  const { data: allProducts, isLoading, isError } = useProducts();

  const toggleFiltro = (filtro: string) => {
    setFiltros((prev) =>
      prev.includes(filtro)
        ? prev.filter((f) => f !== filtro)
        : [...prev, filtro]
    );
  };

  const filtrarProductos = (lista: Product[] = []) => {
    return lista.filter((producto) => {
      if (!producto.title) return false; 

      const coincideBusqueda = producto.title
        .toLowerCase()
        .includes(busqueda.toLowerCase());

      const coincideFiltro =
        filtros.length === 0 ||
        (filtros.includes('Hot Sale') && producto.category === 'Hot Sale') ||
        (filtros.includes('Conjuntos 2025') && producto.category === 'Conjuntos 2025') ||
        (filtros.includes('Oferta < 300') && producto.price < 300);

      return coincideBusqueda && coincideFiltro;
    });
  };

  if (isLoading) return <p>Cargando productos...</p>;
  if (isError) return <p>Error al cargar productos.</p>;

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
            title={product.title}
            description={product.description}
            image={product.image || 'http://localhost:4000/products'}
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
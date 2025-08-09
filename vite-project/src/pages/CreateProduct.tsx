import React, { useState } from 'react';
import { useCreateProduct } from '../hooks/useCreateProduct';

export default function CreateProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const { mutate, isPending, isError, isSuccess } = useCreateProduct();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      title,
      description,
      price: Number(price),
      image,
    });
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Crear producto</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="URL de imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit" disabled={isPending}>
          {isPending ? 'Guardando...' : 'Crear'}
        </button>
      </form>

      {isError && <p style={{ color: 'red' }}>Error al crear producto</p>}
      {isSuccess && <p style={{ color: 'green' }}>Producto creado con éxito</p>}
    </div>
  );
}
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newProduct: { title: string; description: string; price: number; image: string }) => {
      const { data } = await axios.post('http://localhost:4000/products', newProduct);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products']});
    },
    onError: (error) => {
      console.error('Error creando producto:', error);
    },
  });
}
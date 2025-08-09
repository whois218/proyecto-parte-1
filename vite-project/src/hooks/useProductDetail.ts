import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3000/products');
      return data;
    },
  });
}
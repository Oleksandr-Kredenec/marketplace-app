import { useState } from 'react';

function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    return [products, setProducts] as const;
}

export default useProducts;
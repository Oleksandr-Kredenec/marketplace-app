import {useState, useEffect} from 'react';
import useProducts  from './hooks/useProducts.ts';
import { getProducts } from './services/api.ts';
import ProductContainer from './components/Product/ProductContainer.tsx';
import AddButton from './components/AddProductForm/AddButton.tsx';
import AddForm from './components/AddProductForm/AddForm.tsx';
import SortBar from './components/SortingPanel/SortBar.tsx';

export default function App() {
    const [products, setProducts] = useProducts();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [addFormActive, setAddFormActive] = useState<boolean>(false);

    // Fetch data to backend
    useEffect( () => {
        const fetchData = async () => {
            try {
                getProducts(setProducts, {sortBy: "Title", dimension: "Ascending"});
            } catch (error) {
                console.log(`[!] Error of loading\n${error}`);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    // Loading bar
    if (isLoading)
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="border-8 h-16 w-16 rounded-4xl border-cyan-400 
                border-t-white animate-spin"/>
            </div>
        );

    // Main app
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col">
                <SortBar onSort={setProducts}/>
                <ProductContainer products={products}/>
            </div>
            <AddButton onClick={() => setAddFormActive(!addFormActive)}/>
            <AddForm isActive={addFormActive} setFormActive={setAddFormActive}/>
        </div>
    );
}
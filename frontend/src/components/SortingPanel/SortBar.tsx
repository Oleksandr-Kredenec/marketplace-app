import { useState } from 'react';
import {getProducts} from '../../services/api.ts';

interface SortBarProps{
    onSort: (products: Product[]) => void;
}

export default function SortBar({ onSort }: SortBarProps){
    const [sortOption, setSortOption] = useState<sortingOption>('ta');
    
    function handleChange(e: any){
        const selectedOptions = e.target.value;
        setSortOption(selectedOptions);

        const sortBy = selectedOptions[0] === 't' ? 'Title' : 'Price';
        const dimension = selectedOptions[1] === 'a' ? 'Ascending' : 'Descending';
        getProducts(onSort, {sortBy, dimension});
    }

    return (
        <div className="flex ml-auto border-2 border-gray-500 pr-1 pl-1 mt-1
                      bg-white hover:bg-gray-100">
            <select value={sortOption} onChange={handleChange}>
                <option value='ta'>За назвою та алфавітним порядком</option>
                <option value='td'>За назвою проти алфавітного порядку</option>
                <option value='pa'>За ціною від дешевих до дорожчих</option>
                <option value='pd'>За ціною від дорожчих до дешевих</option>
            </select>
        </div>
    )
}
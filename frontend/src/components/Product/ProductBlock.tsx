import MoreButton from "../main/MoreButton";
import ProductFunctionBar from "./ProductFunctionBar"

interface productBlockProps {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    isActiveFuncBarId: string | null;
    setIsActiveFuncBarId: (value: string | null) => void;
}

export default function ProductBlock({id, title, price, imageUrl, isActiveFuncBarId, setIsActiveFuncBarId}: productBlockProps){
    return (
        <div className="relative w-72 h-85 px-4 pt-5 pd-15 m-2 bg-white rounded-2xl border-2 border-gray-300">
            <MoreButton
                setIsActive={() => {
                    if (isActiveFuncBarId?.toString() === id){
                        setIsActiveFuncBarId(null);
                    } else {
                        setIsActiveFuncBarId(id);
                    }
                }}
            />
            <ProductFunctionBar
                id={id}
                isActive={id === isActiveFuncBarId?.toString()}
            />
            <img className="h-50 w-full rounded-lg" src={imageUrl}/>
            <p className="text-2xl m-0">{title}</p>
            <p className="text-3xl m-0">{price}</p>
        </div>
    );
}
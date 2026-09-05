interface AddButtonProps{
    onClick: () => void;
}

export default function AddButton({onClick}: AddButtonProps){
    return (
        <div className="fixed bottom-8 right-16">
            <button
             className="relative h-15 w-15 rounded-4xl bg-cyan-400 hover:animate-spin cursor-pointer"
             onClick={onClick}>
                <div className="absolute top-1/2 left-2 right-2 h-2 
                bg-white transform -translate-y-1/2"></div>
                <div className="absolute left-1/2 top-2 bottom-2 w-2 
                bg-white transform -translate-x-1/2"></div>
            </button>
        </div>
    );
}
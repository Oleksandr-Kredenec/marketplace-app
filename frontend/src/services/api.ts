export function getProducts(setProducts: (products: Product[]) => void) {
    fetch('http://localhost:5011/products')
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        setProducts(result.value);
    });
}

export async function addProduct(title: string, price: string, description: string, 
                                 img: File | null){

    const formData = new FormData();
    formData.append('userId', '3e192f73-0ef6-43be-b2f5-cf2708f803ad');
    formData.append('title', `${title}`);
    formData.append('price', `${Number(price)}`);
    if (img) formData.append('image', img);
    formData.append('description', `${description}`);

    const response = await fetch("http://localhost:5011/products", {
        method: "POST",
        body: formData
    });

    if (!response.ok){
        alert(`error: ${await response.text()}`);
        return false;
    }

    window.location.reload();
    return true;
}

export async function deleteProduct(id: string){
        await fetch(`http://localhost:5011/products/${id}`, {
            method: "DELETE"
        })
        window.location.reload();
    }

export default { getProducts, addProduct, deleteProduct };
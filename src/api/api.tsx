export const getProducts = () => {
    return fetch('http://localhost:3001/api/products/')
            .then((response) => {
                return response.json();
            })
}
import axios from "axios";
export function getProductData(id) {
    return axios.get('https://dummyjson.com/products/' + id);

}

export function getProductList(xyz) {
    return axios.get('https://dummyjson.com/products');
}




//Async/ Await and PRomises


//synchronous -- sath k sath
//promises - token
//Asynchronous- wait krna pdta hai, abhi k liye promise 
import axios from "axios";

export function getProductData(id) {
    return axios.get('https://dummyjson.com/products/' + id).then(function (response) {
        return response.data;
    });

}

export function getProductList(xyz) {
    return axios.get('https://dummyjson.com/products').then(function (response) {
        return response.data.products;
    });
}




//Async/ Await and PRomises


//synchronous -- sath k sath
//promises - token
//Asynchronous- wait krna pdta hai, abhi k liye promise 


//Promises are chainable
//Promise fail, catch.
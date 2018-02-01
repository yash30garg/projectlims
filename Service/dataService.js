import Rx , { Observable } from 'rxjs'
import { Http } from 'http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import axios from 'axios'
    // const servUrl1 = "https://cors.io/?host:3004/api/Books";
    const servUrl1 = "https://limsreactapi.azurewebsites.net/api/books";    
    const servUrl2 = "https://limsreactapi.azurewebsites.net/api/users";
export var getUser = () => {
    // return fetch("https://limsreactapi.azurewebsites.net/api/UsersInfo")
    return fetch("https://limsreactapi.azurewebsites.net/api/UsersInfo")    
    .then((res) => res.json())
    .then(user => console.log(user.data[0].Users))
    .catch((error) => {
        return new Error(error.status);
    });
}

export var getBook = () => {
    return fetch("https://limsreactapi.azurewebsites.net/api/Books")
    .then((res) => res.json())
    .then(books => console.log(books.data[0].booksArray))
    .catch((error)=> {
        return new Error(error.status);
    });
}
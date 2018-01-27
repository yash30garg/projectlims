import storeBbooks from '../../state/store/storeBook'
let response;
export let returnBook=(isbn)=>{
fetch('http://localhost:3005/borrowedBooks/deleteBook',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                mid:window.user,
                isbn:isbn
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            storeBbooks.dispatch({type:"STORE_BBOOKS",payload: res.data})
            // window.bbooks=storeBbooks.getState().bbooks;
    })
}
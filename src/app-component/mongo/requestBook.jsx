import storeBbooks from '../../state/store/storeBbooks'; 
let response;
export let requestBook=(newBook)=>{
    fetch('http://localhost:3005/borrowedBooks/addBook',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                mid:window.user,
                item:newBook
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            response=res;
            console.log(response.status);
            // window.bbooks=res.data
            storeBbooks.dispatch({type:"STORE_BBOOKS",payload: res.data})
            console.log(res.data);
            // window.bbooks=res.data;
            // window.bbooks=storeBbooks.getState().bbooks;
        })
}
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
            console.log(res.data);
            window.bbooks=res.data;
        })
}
let response;
async function returnBook(isbn){
var data = await fetch('http://localhost:3005/borrowedBooks/deleteBook',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                mid:window.user,
                isbn:isbn
            })
        })
var allData=data.json();
return allData
    //     .then((res)=>res.json())
    //     .then((res)=>{
    //         // storeBbooks.dispatch({type:"STORE_BBOOKS",payload: res.data})
    //         this.props.storeBbooks(res.data)
    //         // window.bbooks=res.data;
    //         // window.bbooks=storeBbooks.getState().bbooks;
    // })
}
export default returnBook;
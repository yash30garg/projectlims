// import storeBbooks from '../../state/store/storeBbooks'; 
// let response;
async function requestBook(newBook){
    
   var data= await fetch('https://limsreactapi.azurewebsites.net/borrowedBooks/addBook',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                mid:window.user,
                item:newBook
            })
        })
        var allData=data.json();
        return allData;
        // .then((res)=>res.json())
        // .then((res)=>{
        //     response=res;
        //     console.log(response.status);
        //     // window.bbooks=res.data
        //     // storeBbooks.dispatch({type:"STORE_BBOOKS",payload: res.data})
        //     // console.log(res.data);
        //     var num=5;
        //     return(res.data)
        //     // window.bbooks=res.data;
        //     // window.bbooks=storeBbooks.getState().bbooks;
        // })
}
export default requestBook;
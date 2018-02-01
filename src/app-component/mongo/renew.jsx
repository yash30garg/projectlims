// import storeBbooks from '../../state/store/storeBbooks'; 
async function renewBook(newBook){
    
   var data= await fetch('http://localhost:3005/borrowedBooks/renewDate',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                mid:window.user,
                isbn:newBook.isbn,
                item:newBook
            })
        })
        var allData=data.json();
        return allData;
}
export default renewBook;
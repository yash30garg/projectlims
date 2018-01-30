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
}
export default returnBook;
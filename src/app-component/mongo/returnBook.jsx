
async function returnBook(isbn){
var data = await fetch('https://limsreactapi.azurewebsites.net/borrowedBooks/deleteBook',{
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
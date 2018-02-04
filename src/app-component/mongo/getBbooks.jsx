async function getBbooks(user){
var data = await fetch('https://limsreactapi.azurewebsites.net/borrowedBooks/getBooks',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                mid:window.user
            })
        })
var allData=data.json();
return allData
}
export default getBbooks;
export async function addReview(isbn,review){
    
   var data= await fetch('http://localhost:3005/borrowedBooks/add',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                isbn:isbn,
                item:review
            })
        })
        var allData=data.json();
        return allData;
}
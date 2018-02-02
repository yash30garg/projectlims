export async function getReview(isbn){
    
   var data= await fetch('https://limsreactapi.azurewebsites.net/borrowedBooks/getReviews',{    
//    var data= await fetch('http://localhost:3005/borrowedBooks/getReviews',{    
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                isbn:isbn
            })
        })
        var allData=data.json();
        return allData;
}
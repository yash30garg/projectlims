export async function addWishlist(book){
    
   var data= await fetch('https://limsreactapi.azurewebsites.net/wishlist/addWBook',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                mid:window.user,
                book:book
            })
        })
        var allData=data.json();
        return allData;
}
// export default addWishlist;
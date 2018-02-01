export async function removeWishlist(isbn){
var data = await fetch('https://limsreactapi.azurewebsites.net/wishlist/removeWishBook',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                mid:window.user,
                book:isbn
            })
        })
var allData=data.json();
return allData
}
// export default removeWishlist;
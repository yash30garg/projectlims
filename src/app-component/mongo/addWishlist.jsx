export async function addWishlist(book){
    
   var data= await fetch('http://localhost:3005/wishlist/addWBook',{
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
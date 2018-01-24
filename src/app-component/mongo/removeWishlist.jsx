export let removeWishlist=(isbn)=>{
            fetch('http://localhost:3005/wishlist/removeWishBook',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                mid:window.user,
                book:isbn
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            window.wishlist=res;
        })
}
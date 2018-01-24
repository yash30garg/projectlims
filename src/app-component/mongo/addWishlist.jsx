export let addWishlist=(book)=>{
            fetch('http://localhost:3005/wishlist/addWBook',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                mid:window.user,
                book:book
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            // alert(res.length);
            window.wishlist=res;
            console.log(res);
        })
}
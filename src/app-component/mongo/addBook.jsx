export var addBook = (bookDetails) => {
        fetch('http://localhost:3005/addBook/addBook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // form:{mid:"1042932"}
            body: JSON.stringify({
                isbn: bookDetails.isbn,
                title: bookDetails.title,
                author: bookDetails.author,
                publisher: bookDetails.publisher,
                category: bookDetails.category,
                year: bookDetails.year,
                url: bookDetails.url,
                copies: bookDetails.copies,
                ratings: bookDetails.ratings
                // wishlist:[]
            })
        })
            // .then(res=>(res.json))
            .then((res) => res.json())
            .then((res) => {
                if (res === "Exists")
                    alert("Book Already Exists")
            })
    }
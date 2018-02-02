export var addBook = (bookDetails) => {
        fetch('https://limsreactapi.azurewebsites.net/addbook/addBook', {
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
                    return res
                    // alert("Book Already Exists")
            })
    }
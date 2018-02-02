async function fetch() {
        var data = await fetch('https://limsreactapi.azurewebsites.net/books/getBooks',
        // fetch('http://localhost:3005/books/getBooks',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })
          var allData=data.json();
          window.display=allData;
            localStorage.setItem('books',JSON.stringify(allData))

    }
    (async function() {
            await fetch()
        }).bind(this)()
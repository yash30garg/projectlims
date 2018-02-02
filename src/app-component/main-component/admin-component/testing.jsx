class Books extends Component {
    constructor()
     {
        super();
         this.state = {
      books: [],
    }
  }
  componentDidMount() {
    return fetch('./books.json')
      .then((response) => response.json())
      .then((responseJson) => {
       
        this.setState({
          books : responseJson.booksArray
        })
        //console.log((this.state.books)
      })
    }
  render() {
    return (
      <div>
        
        {
          this.state.books.map((dynamicData,key)=>
          <div>
            {dynamicData.isbn}
            {dynamicData.details}
            </div>

          )
        }

      </div>
        );
    }
}
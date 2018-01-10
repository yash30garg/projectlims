<div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 my-5">
                        <img src={book.details.url} height="400vh"/>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 mt-5">
                        <h3>
                            <br/>
                            <table
                                className="table table-responsive"
                                style={{
                                textTransform: "capitalize"
                            }}>
                                <tr>
                                    <td
                                        style={{
                                        textAlign: "left"
                                    }}>
                                        <i>Title</i>
                                    </td>
                                    <td>:</td>
                                    <td
                                        style={{
                                        textAlign: "left"
                                    }}>
                                        {book.details.title}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                        textAlign: "left"
                                    }}>
                                        <i>Author</i>
                                    </td>
                                    <td>:</td>
                                    <td
                                        style={{
                                        textAlign: "left"
                                    }}>
                                        {book.details.author}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                        textAlign: "left"
                                    }}>
                                        <i>ISBN</i>
                                    </td>
                                    <td>:</td>
                                    <td
                                        style={{
                                        textAlign: "left"
                                    }}>
                                        {book.isbn}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                        textAlign: "left"
                                    }}>
                                        <i>Category</i>
                                    </td>
                                    <td>:</td>
                                    <td
                                        style={{
                                        textAlign: "left"
                                    }}>
                                        {book.details.category}
                                    </td>
                                </tr>
                                <tr>
                                    <td
                                        style={{
                                        textAlign: "left"
                                    }}>
                                        <i>Publisher</i>
                                    </td>
                                    <td>:</td>
                                    <td
                                        style={{
                                        textAlign: "left"
                                    }}>
                                        {book.details.publisher}
                                    </td>
                                </tr>

                                <tr
                                    styele={{
                                    textAlign: "center"
                                }}>
                                    <td colSpan="2">
                                        {[1, 2, 3, 4, 5].map(d => {
                                            if (book.details.rating >= d) 
                                                return <span
                                                    class="fa fa-star mt-1"
                                                    style={{
                                                    color: '#FF8C00',
                                                    fontSize: '30px'
                                                }}></span>
                                                // else
                                            //     return <span         class="fa fa-star mt-1"         style={{ color:
                                            // 'black',         fontSize: '30px'     }}></span>
                                        })}
                                    </td>
                                </tr>
                                <td>
                                    {this.state.b}
                                </td>
                                <tr></tr>
                            </table>
                        </h3>
                    </div>
                    <div
                        className="col ml-5"
                        style={{
                        fontSize: '40px'
                    }}
                        onClick={this.goBack}>X

                    </div>
                </div>
                <div
                    className="container-fluid"
                    style={{
                    textAlign: 'justify',
                    fontSize: "20px"
                }}>
                    If you want to achieve JavaScript′s full potential, it is critical to understand
                    its nature, history, and limitations. To that end, this updated version of the
                    bestseller by veteran author and JavaScript guru Nicholas C. Zakas covers
                    JavaScript from its very beginning to the present–day incarnations including the
                    DOM, Ajax, and HTML5. Zakas shows you how to extend this powerful language to
                    meet specific needs and create dynamic user interfaces for the web that blur the
                    line between desktop and internet. By the end of the book, you′ll have a strong
                    understanding of the significant advances in web development as they relate to
                    JavaScript so that you can apply them to your next website.
                </div>
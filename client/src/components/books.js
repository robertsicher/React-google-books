import React, {Component} from 'react';
import request from 'superagent'
import BookList from './bookList'
import { Container  } from 'react-bootstrap';
import SearchArea from './searchArea';

class Books extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then( (data) => {
                this.setState({ books: [...data.body.items]})
                console.log(data)
            })
    }

    handleSearch = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        return(
        <div>
            <Container>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            <BookList books={this.state.books}/>
            </Container>
        </div>  
        );
    }
}

export default Books;

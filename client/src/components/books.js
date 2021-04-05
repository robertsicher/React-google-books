import React, {Component} from 'react';
import request from 'superagent'
import BookList from './bookList'
import { Container  } from 'react-bootstrap';
import SearchArea from './searchArea';
import API from "./utils/api";

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

    saveBook = currentBook => {
        console.log("This is the current book", currentBook);
        API.saveBook({
            id: currentBook.id,
            title: currentBook.title,
            authors: currentBook.author,
            description: currentBook.description,
            image: currentBook.image,
            link: currentBook.link
        })
        .then(res => console.log("Successful POST", res))
        .catch(err => console.log("Error", err));
    }

    render() {
        return(
        <div>
            <Container>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            <BookList books={this.state.books} saveBook={this.saveBook}/>
            </Container>
        </div>  
        );
    }
}

export default Books;

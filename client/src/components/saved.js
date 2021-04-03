import React, {Component} from 'react';
import axios from 'axios';
import SavedBookCard from './savedBookCard';
import { Container } from 'react-bootstrap';


export default class Saved extends Component {
  constructor(props) {
    super(props);

    // this.deleteBook = this.deleteBook.bind(this);

    this.state = { savedBooks: []};
  }

  getSavedBooks() {
    axios
      .get("/api/books")
      .then((response) => {
        this.setState({ savedBooks: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteBookt(id) {
    axios.delete("/api/books/" + id).then((res) => this.getProducts());
    this.setState({
      savedBooks: this.state.savedBooks.filter((el) => el._id !== id),
    });
  }

  componentDidMount() {
    this.getSavedBooks();
  }

  bookList() {
    return this.state.savedBooks.map((currentBook) => {
      return <SavedBookCard book={currentBook} deleteBook={this.deleteBook} key={currentBook._id} />;
    });
  }

  render(){
    return(
      <Container>{this.bookList()}</Container>
    )
  }
}


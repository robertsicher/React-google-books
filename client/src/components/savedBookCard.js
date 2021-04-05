import React, {Component} from 'react';
import { Card , Button ,  } from 'react-bootstrap';


class SavedBookCard extends Component {

  onClickDelete = () => {
    this.props.deleteBook(this.props.book._id)
  }

  render(){
    console.log(this.props)
    return(
        <Card className="col-lg-4 m-1">
        <Card.Img variant="top" src={this.props.book.image} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text>
          {this.props.book.authors}
          </Card.Text>
          <Card.Text>
          </Card.Text>
          <Button variant="primary" onClick={()=> window.open(this.props.book.link, "_blank")}>View in the store</Button>
          <Button onClick={this.onClickDelete} className="m-1" variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default SavedBookCard;

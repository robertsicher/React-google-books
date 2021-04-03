import React, {Component} from 'react';
import { Card , Button ,  } from 'react-bootstrap';


class BookCard extends Component {

  onClickSave = () => {
    this.props.saveBook(this.props)
  }

  render(){
    return(
        <Card className="col-lg-4 m-1">
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
          {this.props.author}
          </Card.Text>
          <Card.Text>
          </Card.Text>
          <Button variant="primary" onClick={()=> window.open(this.props.hyperLink, "_blank")}>View in the store</Button>
          <Button onClick={this.onClickSave} className="m-1" variant="primary">Save</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default BookCard;

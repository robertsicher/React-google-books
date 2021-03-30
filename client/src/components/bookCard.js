import React from 'react';
import { Card , Button ,  } from 'react-bootstrap';


const BookCard = (props) => {
    return(
        <Card className="col-lg-4 m-1">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.author}
          </Card.Text>
          <Card.Text>
          {props.description.substr(0, 155)}..
          </Card.Text>
          <Button variant="primary" onClick={()=> window.open(props.hyperLink, "_blank")}>View in the store</Button>
          <Button className="m-1" variant="primary">Save</Button>

        </Card.Body>
      </Card>
    )
}

export default BookCard;

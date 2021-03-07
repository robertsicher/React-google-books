import React from 'react';
import { Card , Button ,  } from 'react-bootstrap';


const BookCard = (props) => {
    return(
        <Card className="col-md-4 mx-1">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.author}
          </Card.Text>
          <Card.Text>
          {props.description}
          </Card.Text>
          <Button variant="primary" onClick={()=> window.open(props.hyperLink, "_blank")}  >Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}

export default BookCard;

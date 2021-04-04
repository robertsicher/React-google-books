import React from 'react';
import BookCard from './bookCard'


const BookList = (props) => {
    console.log(props)
    
    return(
    <div className="row justify-content-center">
        {
            props.books.map((book, i) => {
                return <BookCard
                key={i}
                image={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                link={book.volumeInfo.infoLink}
                saveBook={props.saveBook}
                />
            })
        }
    </div>  
    )
}



export default BookList;

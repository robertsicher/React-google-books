import axios from 'axios';

export default {
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    getBooks: function() {
        return axios.get("/api/books");
    },
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};
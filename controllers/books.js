const fetch = require('node-fetch');
const book = require('../models/book');
const books = require('../models/book');

module.exports.getAllBooks = async(req, res) => {
try {    
    res.status(200).send(books);
} catch (error) {
    console.log(error);
    res.send(error);
}
}

module.exports.getBookById = async(req, res) => {
try {
    const { id } = req.params;
    if (!id) return req.status(404).send('Invalid Id!');
    let book = books.find(e => e.id === +id);
    if (!book) return res.status(400).send('book not found!');
    res.status(200).send(book);
} catch (error) {
    console.log(error);
    res.send(error);
}
}

module.exports.createBook = async(req, res) => {
    try {
        const { name } = req.body;
        if (!name) return req.status(404).send('Invalid Name!');
        books.push({name: name, id: books.length+1})
        res.status(201).send(books[books.length-1]);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports.deleteBookById = async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) return req.status(404).send('Invalid Id!');
        let book = books.find(e => e.id === +id);
        if (!book) return res.status(400).send('book not found!');
        books = books.filter(e => e.id !== +id);
        res.status(200).send(book);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

module.exports.updateBookById = async(req, res) => {
    try {
        const { id, name } = req.body;
        if (!name || !id) return req.status(404).send('Invalid Request!');
        let index = books.indexOf(e => e.id === +id);
        if (index === -1) return res.status(400).send('book not found!');
        books[index] = {...book, name};
        res.status(200).send(books[index]);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
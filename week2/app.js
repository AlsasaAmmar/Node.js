const express = require('express');
const app = express();
const PORT = 5000;
//const randomID = require('uuid/v4');
// Middleware
app.use(express.json());
const books = [
	{
		id: '1234567',
		title: 'Shoe Dog',
		author: 'Phil Knight'
	},
	{
		id: '2345678',
		title: '4-Hour Work Week',
		author: 'Tim Ferris'
	},
	{
		id: '3456789',
		title: 'The Alchemist',
		author: 'Paulo Coelho'
	}
];
// GET - READ
app.get('/', (req, res) => res.status(200).json(books).end());
// post - create
app.post('/', (req, res) => {
	const newBook = req.body;
	newBook.id = randomID();
	books.push(newBook);
	res.status(201).json(books).end();
});
//  put - update
app.put('/:id', (req, res) => {
	const requestedBookId = req.params.id;
	const foundBook = books.find((book) => book.id == requestedBookId);
	if (foundBook) {
		books.forEach((book) => {
			if (book.id == requestedBookId) {
				book.title = req.body.title;
				book.author = req.body.author;
			}
		});
		res.status(301).end('book is found');
	} else {
		res.status(404).end('no such a book');
	}
});
// Delete
app.delete('/:id', (req, res) => {
	const requestedBookId = req.params.id;
	const foundBook = books.find((book) => book.id == requestedBookId);
	if (foundBook) {
		const index = books.forEach((book, index) => {
			if (book.id == requestedBookId) {
				return index;
			}
		});
		books.splice(index, 1);
		res.status(200).json(books).end();
	} else {
		res.status(400).end('Book is not found');
	}
});
app.listen(PORT, () => console.log(`listening to port : ${PORT}`));
const express = require("express");
const router = express.Router();

const db = require("../models");

// ============
// VIEW ROUTES
// ============

// index page (on server.js)
// votes page
// admin page

//INDEX ROUTE FOR GET ALL BOOKS
router.get("/vote", (req, res) => {
	res.render("vote", res);
	// db.Book.findAll({
	// 	include: db.Club,
	// })
	// 	.then((allBooks) => {
	// 		console.log(allBooks);
	// 		res.render("vote", { books: allBooks });
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
});

//ROUTE FOR NEW BOOK
// router.get("/book/new", (req, res) => {
// 	res.render("new-book");
// });




// TODO: Correct this block to be specific to the admin page
router.get("/admin", (req, res) => {
	// res.render("admin", res);
	db.Book.findAll({
		include: db.Club,
	})
		.then((admin) => {
			console.log(admin);
			// TODO: add correct object for this view route
			// res.render("admin", { books: admin });
		})
		.catch((err) => {
			console.log(err);
		});
});

// ============
// API ROUTES
// ============

// GET all clubs
// POST club

// GET books by club
// POST books by club
// PUT books by club
// DELETE books by club


//ROUTE TO EDIT BOOKS
// TODO: Convert this route to an API GET route
// router.get("/books/:id/edit", (req, res) => {
// 	db.Book.findOne({
// 		where: {
// 			id: req.params.id,
// 		},
// 	}).then((foundBook) => {
// 		console.log(foundBook.title);
// 		res.render("edit-book", {
// 			title: foundBook.title,
// 			author: foundBook.author,
// 			id: foundBook.id,
// 		});
// 	});
// });

//ROUTE TO POST BOOKS
router.post("/api/books", (req, res) => {
	db.Book.create(req.body)
		.then((newBook) => {
			res.json(newBook);
		})
		.catch((err) => {
			console.log(err);
		});
});

//ROUTE TO UPDATE BOOKS
router.put("/api/books/:id", (req, res) => {
	db.Book.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((updatedBook) => {
			res.json(updatedBook);
		})
		.catch((err) => {
			console.log(err);
		});
});

//ROUTE TO DELETE BOOKS
router.delete("/api/books/:id", (req, res) => {
	db.Book.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((response) => {
			console.log(response);
			res.json(response);
		})
		.catch((err) => {
			console.log(err);
		});
});

// TODO: create GET and POST routes for clubs

module.exports = router;

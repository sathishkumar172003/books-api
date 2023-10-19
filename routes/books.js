const express = require("express");
const router = express.Router();

const bookController = require("../controllers/books");

router.route("/").get(bookController.getAllBooks);

router.route("/add").post(bookController.addBook);

router.route("/:book_id").get(bookController.getSingleBook);

router.route("/update/:book_id").put(bookController.updateBook);

router.route("/delete/:book_id").delete(bookController.deleteBook);

module.exports = router;

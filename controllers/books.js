const Books = require("../model/books");

const getAllBooks = async (req, res) => {
  try {
    let books = await Books.find({});
    return res.status(200).json({ nbHits: books.length, data: books });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const getSingleBook = async (req, res) => {
  let book_id = req.params.book_id;
  try {
    let book = await Books.findById(book_id);
    return res.status(200).json({ data: book });
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};

const addBook = async (req, res) => {
  try {
    const book = await Books.create({ ...req.body });
    return res.status(201).json({ data: book });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const updateBook = async (req, res) => {
  let book_id = req.params.book_id;
  const { title, author, price, ISBN } = req.body;
  if (!title || !author || !price || !ISBN) {
    console.log(req.body);
    return res
      .status(400)
      .json({ msg: "please provide the necessary information" });
  }
  try {
    let book = await Books.findOneAndUpdate(
      { _id: book_id },
      { ...req.body },
      { new: true, runValidator: true }
    );
    return res.status(200).json({ data: book });
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    let is_delete = await Books.deleteOne({ _id: req.params.book_id });
    return res.status(200).json({ msg: is_delete });
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
};

package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook() {
        System.out.println("Service: Adding a new book.");
        bookRepository.save();
    }

    public void getAllBooks() {
        System.out.println("Service: Getting all books.");
        bookRepository.findAll();
    }
}

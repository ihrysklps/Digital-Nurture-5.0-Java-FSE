package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter Injection - Spring calls this automatically
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Dependency Injected: BookRepository -> BookService");
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

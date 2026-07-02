package com.library.service;

import com.library.repository.BookRepository;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    private BookRepository repository;

    public BookService() {}

    public BookService(BookRepository repository) {
        this.repository = repository;
    }

    public void setRepository(BookRepository repository) {
        this.repository = repository;
    }

    public void showBook() {
        repository.displayBook();
    }
}

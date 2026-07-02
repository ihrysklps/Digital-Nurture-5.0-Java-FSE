package com.library.repository;

import com.library.entity.Book;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class BookRepository implements BookRepositoryInterface {

    private final List<Book> books = new ArrayList<>();

    @Override
    public Book save(Book book) {
        books.add(book);
        return book;
    }

    @Override
    public List<Book> findAll() {
        return books;
    }

    public void displayBook() {
        System.out.println("Book Repository Called");
    }
}
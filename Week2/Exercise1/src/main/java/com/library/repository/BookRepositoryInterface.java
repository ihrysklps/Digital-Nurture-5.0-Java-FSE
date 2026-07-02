package com.library.repository;

import com.library.entity.Book;
import java.util.List;

public interface BookRepositoryInterface {
    Book save(Book book);
    List<Book> findAll();
}

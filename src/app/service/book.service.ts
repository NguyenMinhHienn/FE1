import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IProduct from '../interface/product';
import IBook from '../interface/book';

@Injectable({
  providedIn: 'root' // Đảm bảo service được cung cấp ở cấp root
})
export class BookService {
  private apiUrl = 'http://localhost:3000/books'; // URL API

  constructor(private http: HttpClient) {}

  // Lấy danh sách sách
  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.apiUrl);
  }

  // Lấy thông tin sách theo ID
  getBookById(id: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.apiUrl}/${id}`);
  }

  // Thêm sách mới
  addBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.apiUrl, book);
  }

  // Cập nhật sách
  updateBook(id: string, book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.apiUrl}/${id}`, book);
  }

  // Xóa sách
  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../service/book.service';
import IBook from '../../../interface/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: IBook[] = []; // Danh sách sách

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  // Lấy danh sách sách từ API
  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        if (data && Array.isArray(data)) {
          this.books = data; // Gán danh sách sách từ API
          console.log('Danh sách sách:', this.books); // Log danh sách sách
        } else {
          console.error('Dữ liệu trả về từ API không hợp lệ:', data);
          alert('Dữ liệu trả về không hợp lệ. Vui lòng thử lại sau!');
        }
      },
      error: (err) => {
        console.error('Lỗi khi lấy danh sách sách:', err);
        alert('Không thể tải danh sách sách. Vui lòng kiểm tra kết nối hoặc thử lại sau!');
      }
    });
  }

  // Xóa sách
  deleteBook(id: string): void {
    if (confirm('Bạn có chắc chắn muốn xóa sách này không?')) {
      this.bookService.deleteBook(id).subscribe({
        next: () => {
          alert('Xóa sách thành công!');
          this.books = this.books.filter(book => book.id !== id); // Cập nhật danh sách
        },
        error: (err) => {
          console.error('Lỗi khi xóa sách:', err);
          alert('Không thể xóa sách. Vui lòng thử lại sau!');
        }
      });
    }
  }
}

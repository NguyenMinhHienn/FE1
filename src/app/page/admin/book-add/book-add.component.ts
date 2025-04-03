import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../../service/book.service';
import IBook from '../../../interface/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  bookForm: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {
    // Khởi tạo form với các trường và validate
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0)]],
      pulished: [true, [Validators.required]], 
      image: ['', [Validators.required]],
      genre: ['', [Validators.required]]
    });
  }

  // Thêm sách mới
  addBook(): void {
    if (this.bookForm.valid) {
      const newBook: IBook = this.bookForm.value; 
      this.bookService.addBook(newBook).subscribe({
        next: () => {
          alert('Thêm sách thành công!');
          this.router.navigate(['/admin/book']); 
        },
        error: (err) => {
          console.error('Lỗi khi thêm sách:', err);
          alert('Không thể thêm sách. Vui lòng thử lại sau!');
        }
      });
    } else {
      alert('Vui lòng điền đầy đủ thông tin hợp lệ!');
    }
  }
}

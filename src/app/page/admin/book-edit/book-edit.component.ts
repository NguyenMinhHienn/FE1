import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../service/book.service';
import IBook from '../../../interface/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup; 
  bookId: string = ''; 

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0)]],
      pulished: [true, [Validators.required]], 
      image: ['', [Validators.required]],
      genre: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

    this.bookId = this.route.snapshot.paramMap.get('id') || '';
    if (this.bookId) {

      this.bookService.getBookById(this.bookId).subscribe({
        next: (book) => {
          this.bookForm.patchValue(book); 
        },
        error: (err) => {
          console.error('Lỗi khi lấy thông tin sách:', err);
          alert('Không thể tải thông tin sách. Vui lòng thử lại sau!');
        }
      });
    }
  }


  updateBook(): void {
    if (this.bookForm.valid) {
      const updatedBook: IBook = this.bookForm.value; // Lấy dữ liệu từ form
      this.bookService.updateBook(this.bookId, updatedBook).subscribe({
        next: () => {
          alert('Cập nhật sách thành công!');
          this.router.navigate(['/admin/book']); // Điều hướng về danh sách sách
        },
        error: (err) => {
          console.error('Lỗi khi cập nhật sách:', err);
          alert('Không thể cập nhật sách. Vui lòng thử lại sau!');
        }
      });
    } else {
      alert('Vui lòng điền đầy đủ thông tin hợp lệ!');
    }
  }
}

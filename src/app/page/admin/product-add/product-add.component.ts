import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../service/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  product = {
    name: '',
    price: null,
    image: '',
    category: '',
    status: false,
    description: ''
  };

  constructor(private productService: ProductService, private router: Router) {}

  handleSubmit(form: any) {
    if (form.valid) {
      this.productService.add(this.product).subscribe({
        next: () => {
          alert('Thêm sản phẩm thành công!');
          this.router.navigate(['/admin/product']); // Điều hướng về danh sách sản phẩm
        },
        error: (err) => {
          console.error('Lỗi khi thêm sản phẩm:', err);
          alert('Không thể thêm sản phẩm. Vui lòng thử lại!');
        }
      });
    } else {
      alert('Vui lòng điền đầy đủ thông tin!');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import IProduct from '../../../interface/product';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: IProduct = {
    id: '',
    name: '',
    price: null,
    image: '',
    category: '',
    status: false,
    description: ''
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Lấy ID sản phẩm từ URL
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Product ID from URL:', id); // Kiểm tra giá trị ID
    if (id) {
      // Gọi API để lấy thông tin sản phẩm
      this.productService.getById(id).subscribe({
        next: (data: IProduct) => {
          this.product = data; // Gán dữ liệu sản phẩm vào biến product
        },
        error: (err) => {
          console.error('Lỗi khi lấy thông tin sản phẩm:', err);
          alert('Không thể lấy thông tin sản phẩm. Vui lòng thử lại!');
          this.router.navigate(['/admin/product']); // Điều hướng về danh sách sản phẩm nếu lỗi
        }
      });
    } else {
      alert('ID sản phẩm không hợp lệ!');
      this.router.navigate(['/admin/product']); // Điều hướng về danh sách sản phẩm nếu ID không hợp lệ
    }
  }

  updateProduct(): void {
    // Kiểm tra dữ liệu sản phẩm trước khi gửi yêu cầu cập nhật
    if (this.product) {
      this.productService.update(this.product.id, this.product).subscribe({
        next: () => {
          alert('Cập nhật sản phẩm thành công!');
          this.router.navigate(['/admin/product']); // Điều hướng về danh sách sản phẩm sau khi cập nhật thành công
        },
        error: (err) => {
          console.error('Lỗi khi cập nhật sản phẩm:', err);
          alert('Không thể cập nhật sản phẩm. Vui lòng thử lại!');
        }
      });
    } else {
      alert('Vui lòng điền đầy đủ thông tin sản phẩm!');
    }
  }
}

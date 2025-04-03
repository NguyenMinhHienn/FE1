import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule
import { ProductService } from '../../../service/product.service';
import IProduct from '../../../interface/product';

@Component({
  selector: 'app-product-list',
  standalone: true, // Đánh dấu component là standalone
  imports: [CommonModule, RouterModule], // Import CommonModule và RouterModule
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = []; // Danh sách sản phẩm
  currentPage: number = 1; // Trang hiện tại
  itemsPerPage: number = 6; // Số sản phẩm trên mỗi trang

  constructor(
    private productService: ProductService, // Inject ProductService
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    this.getProducts(); // Lấy danh sách sản phẩm khi component được khởi tạo
  }

  // Lấy danh sách sản phẩm từ ProductService
  getProducts(): void {
    this.productService.getList().subscribe({
      next: (data) => {
        this.products = data; // Gán dữ liệu vào biến products
      },
      error: (err) => {
        console.error('Lỗi khi lấy danh sách sản phẩm:', err);
        alert('Không thể tải danh sách sản phẩm. Vui lòng thử lại sau!');
      }
    });
  }

  // Lấy danh sách sản phẩm hiển thị trên trang hiện tại
  paginatedProducts(): IProduct[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(start, start + this.itemsPerPage);
  }

  // Tính tổng số trang
  totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  // Chuyển đến trang trước
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Chuyển đến trang sau
  nextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  // Điều hướng đến trang sửa sản phẩm
  editProduct(id: string): void {
    this.router.navigate([`/admin/product/edit/${id}`]); // Điều hướng đến trang chỉnh sửa sản phẩm
  }

  // Xóa sản phẩm
  deleteProduct(id: string): void {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
      this.productService.delete(id).subscribe({
        next: () => {
          alert('Xóa sản phẩm thành công!');
          this.getProducts(); // Cập nhật lại danh sách sản phẩm
        },
        error: (err) => {
          console.error('Lỗi khi xóa sản phẩm:', err);
          alert('Không thể xóa sản phẩm. Vui lòng thử lại sau!');
        }
      });
    }
  }
}

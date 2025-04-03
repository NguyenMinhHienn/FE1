import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import IProduct from '../../interface/product';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: IProduct[] = []
  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(){
    this.productService.getList().subscribe({
      next: (data) =>{ 
        this.products = data
      },
      error: (err) =>{ 
        console.log(err);
      },
      complete: ()=>{
        console.log("Done");
      }
    })        
  }

  addToCart(product: IProduct) {
    // Lấy danh sách giỏ hàng từ localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Thêm sản phẩm vào giỏ hàng
    cart.push(product);

    // Lưu lại giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Chuyển hướng đến trang giỏ hàng
    this.router.navigate(['/cart']);
  }

  removeProduct(index: number) {
    // Xóa sản phẩm khỏi danh sách
    this.products.splice(index, 1);

    // Cập nhật lại danh sách sản phẩm trong localStorage
    localStorage.setItem('products', JSON.stringify(this.products));

    alert('Đã xóa sản phẩm!');
  }
}

// BT:
/**
 * 1. Hiển thị danh sách sản phẩm trong home (card), tự thiết giao diện sử dụng tailwind
 * 2. khi click vào tên sp -> chi tiết sản phẩm
 * - lấy id trong trang chi tiết
 * - tạo service getById
 * - lấy thông tin chi tiết sản phẩm
 * 3. Thiết kế giao diện trang chi tiết sản phẩm (product-detail)
 */
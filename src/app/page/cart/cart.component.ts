import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-cart',
  standalone: true, // Đánh dấu component là standalone
  imports: [CommonModule], // Import CommonModule để sử dụng *ngIf
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor(private router: Router) {} // Inject Router

  ngOnInit() {
    // Lấy danh sách giỏ hàng từ localStorage
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  removeFromCart(index: number) {
    // Xóa sản phẩm khỏi giỏ hàng
    this.cart.splice(index, 1);

    // Cập nhật lại localStorage
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  goBack() {
    // Điều hướng về trang Home
    this.router.navigate(['/']);
  }
}

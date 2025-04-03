// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ProductService } from '../../service/product.service';
// import IProduct from '../../interface/product';
// import { CommonModule } from '@angular/common'; // Import CommonModule
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-product-detail',
//   standalone: true, // Đánh dấu component là standalone
//   imports: [CommonModule], // Import CommonModule để sử dụng *ngIf
//   templateUrl: './product-detail.component.html',
//   styleUrls: ['./product-detail.component.css']
// })
// export class ProductDetailComponent implements OnInit {
//   product: IProduct | null = null;

//   constructor(
//     private route: ActivatedRoute,
//     private productService: ProductService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     // Lấy ID từ URL
//     const productId = this.route.snapshot.paramMap.get('id');
//     if (productId) {
//       // Gọi service để lấy thông tin sản phẩm
//       this.productService.getById(+productId).subscribe({
//         next: (data) => {
//           this.product = data;
//         },
//         error: (err) => {
//           console.error('Lỗi khi lấy thông tin sản phẩm:', err);
//         }
//       });
//     }
//   }

//   goBack() {
//     this.router.navigate(['/']); // Điều hướng về trang Home
//   }
// }

import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';
import { AboutComponent } from './page/about/about.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { ClientComponent } from './layout/client/client.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductListComponent } from './page/admin/product-list/product-list.component';
import { ProductAddComponent } from './page/admin/product-add/product-add.component';
import { CartComponent } from './page/cart/cart.component';
import { ProductEditComponent } from './page/admin/product-edit/product-edit.component';
import { BookListComponent } from './page/admin/book-list/book-list.component';
import { BookAddComponent } from './page/admin/book-add/book-add.component';
import { BookEditComponent } from './page/admin/book-edit/book-edit.component';

export const routes: Routes = [
  {
    path: '', component: ClientComponent, children: [
      { path: '', component: HomeComponent }, // Trang chủ
      { path: 'product', component: ProductsComponent }, // Danh sách sản phẩm
      { path: 'about', component: AboutComponent }, // About
      { path: 'cart', component: CartComponent } // Trang giỏ hàng
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'product', component: ProductListComponent }, // Danh sách sản phẩm
      { path: 'product/add', component: ProductAddComponent }, // Thêm sản phẩm
      { path: 'product/edit/:id', component: ProductEditComponent } // Sửa sản phẩm
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      {path: 'book' , component: BookListComponent}, // Danh sách sách
      {path: 'book/add' , component: BookAddComponent}, // Thêm sách
      {path: 'book/edit/:id' , component: BookEditComponent}, // Sửa sách
    ]
  },
  { path: '**', component: NotfoundComponent } // Trang không tìm thấy
];

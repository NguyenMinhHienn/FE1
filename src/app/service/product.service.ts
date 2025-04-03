import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IProduct from '../interface/product';

@Injectable({
  providedIn: 'root' // Đảm bảo service được cung cấp ở cấp root
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products'; // Thay bằng URL API của bạn

  constructor(private http: HttpClient) {}

  // Lấy danh sách sản phẩm
  getList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  // Xóa sản phẩm
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Phương thức thêm sản phẩm
  add(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }

  // Lấy thông tin sản phẩm theo ID
  getById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }

  // Cập nhật sản phẩm
  update(id: string, product: IProduct): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, product);
  }
}

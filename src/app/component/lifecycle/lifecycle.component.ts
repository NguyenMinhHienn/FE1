import { Component,Input,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {
  child= 'child name'
  handleChangeComponent(){
    this.child = 'child name new'
  }

  @Input() name!: string
  constructor(){
    console.log("Contructor called");
  }

  // khi có 1 hoặc nhiều @Input thay đổi
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called ', changes);
  }

  // chỉ gọi 1 lần duy nhất sau khi component tạo
  // gọi sau ngOnChanges (nếu có)
  // khởi giá trị hoặc call api
  ngOnInit() {
    console.log('ngOnInit called');
  }
 
  // gọi lại mỗi khi component có sự thay đổi
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  // chạy 1 lần duy nhất sau khi view được render
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  // gọi lại mỗi khi có sự thay đổi giao diện
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  // chỉ được gọi khi component bị distroy
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  exports: [
    ProductListComponent,
    ProductComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }

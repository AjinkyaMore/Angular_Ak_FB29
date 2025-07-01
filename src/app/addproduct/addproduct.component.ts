import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor (private fb:FormBuilder, private service:ProductService, 
    private router:Router) { }

  productForm !: FormGroup;

  ngOnInit(): void {
   this.productForm = this.fb.group({
    id:[],
    pname:[],
    price:[],
    category:[],
    color:[]
   });
  }

  addProduct()
  {
    alert("Product added ...!!");
    console.log(this.productForm.value);
    this.service.postProduct(this.productForm.value).subscribe();
    this.router.navigateByUrl('admin/viewproducts');
  }

}

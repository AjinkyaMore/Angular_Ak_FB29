import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {

  constructor (private fb:FormBuilder, private service:ProductService, 
    private router:Router, private activatedRoute:ActivatedRoute) { }

  updateForm !: FormGroup;

  ngOnInit(): void {
   this.updateForm = this.fb.group({
    id:[],
    pname:[],
    price:[],
    category:[],
    color:[]
   });

   this.getEditProduct();
  }

  updateProduct()
  {
    alert("Product updated ...!!");
    console.log(this.updateForm.value);
    this.service.putProduct(this.updateForm.value).subscribe();
    this.router.navigateByUrl('admin/viewproducts');
  }


  getEditProduct()
  {
    let prid = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Product id = " +prid);
    
    this.service.getProductById(prid).subscribe((p:any)=>{
      console.log(p);

      this.updateForm.patchValue(p);
    });
    
  }

}

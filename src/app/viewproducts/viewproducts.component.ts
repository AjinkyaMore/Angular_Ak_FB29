import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  constructor(private service:ProductService, private router:Router)  {  }
  
  products:any;
  
  ngOnInit(): void {

   this.service.getAllProducts().subscribe((p:any)=>{
    console.log(p);
    this.products = p;
   });
  }

  onDelete(id:any)
  {
    if(confirm("Do you delete product ? "))
    {
      this.service.deleteProduct(id).subscribe();
      window.location.reload();
    }
  }

  onEdit(id:any)
  {
    alert("Edit method called ...!!");
    this.router.navigateByUrl("admin/updateproduct/"+id);
  }

}

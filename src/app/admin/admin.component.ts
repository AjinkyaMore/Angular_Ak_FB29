import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor (private router:Router)  {  }

  addProduct()
  {
    this.router.navigateByUrl('admin/addproduct');
  }


  viewProducts()
  {
    this.router.navigateByUrl('admin/viewproducts');
  }
}

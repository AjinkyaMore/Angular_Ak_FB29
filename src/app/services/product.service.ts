import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  postProduct(s:any)
  {
    //return this.http.post("http://localhost:3000/products",s);
   return  this.http.post('http://localhost:9090/addproduct',s);
  }

  getAllProducts()
  {
    //return this.http.get("http://localhost:3000/products");
    return this.http.get('http://localhost:9090/getAllProducts');
  }

  deleteProduct(id:any)
  {
    //return this.http.delete("http://localhost:3000/products/"+id);
    return this.http.delete('http://localhost:9090/deleteProductById/'+id);
  }

  getProductById(id:any)
  {
    //return this.http.get("http://localhost:3000/products/"+id);
    return this.http.get('http://localhost:9090/getProductById/'+id);
  }

  putProduct(pr:any)
  {
    //return this.http.put("http://localhost:3000/products/"+pr.id ,pr);
    return this.http.put('http://localhost:9090/updateProduct/'+pr.id, pr);
  }

}

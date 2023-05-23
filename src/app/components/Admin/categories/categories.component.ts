import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories:ICategory[]=[]

  constructor (private categoryService:CategoryService){
    this.categoryService.getAllCategory().subscribe(data =>{
      this.categories =data
    },err=>console.log(err)
    )
  }

  onHandleRemove(id:any){
    this.categoryService.deleteCategory(id).subscribe(()=>{
      this.categories = this.categories.filter(item => item.id != id)
    },err=>{
      console.log(err);
    })
  }
}
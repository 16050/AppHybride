import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})
export class CategoryEditPage implements OnInit {

  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService, public loadingController: LoadingController, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.categoryForm = this.formBuilder.group({
      'name' : [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  async findOne(id) {
    const loading = await this.loadingController.create();
    await this.categoryService.findOne(id).subscribe(res => {
      this.categoryForm.controls['name'].setValue(res.name);
    });
  }

  async editCategory() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.categoryService.editCategory(this.route.snapshot.paramMap.get('id'), this.categoryForm.value)
    .subscribe(res => {
      let id = res['id'];
        this.router.navigate(['/category-list', JSON.stringify(id)]);
        loading.dismiss();
      }, (err) => {
        console.log(err);
        loading.dismiss();
    });
  }

}

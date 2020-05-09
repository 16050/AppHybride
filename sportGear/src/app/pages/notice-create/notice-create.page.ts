import { NoticeService } from './../../services/notice.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-notice-create',
  templateUrl: './notice-create.page.html',
  styleUrls: ['./notice-create.page.scss'],
})
export class NoticeCreatePage implements OnInit {

  noticeForm: FormGroup;
  categories: any;
  id_name: any;

  constructor(private categoryService: CategoryService, private noticeService: NoticeService, public loadingController: LoadingController, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.findAll();
    this.noticeForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'content' : [null, Validators.required],
      'category' : [null, Validators.required]
    });
  }

  async findAll() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.categoryService.findAll()
      .subscribe(res => {
        console.log(res);
        this.categories = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }

  async newNotice(){
    this.id_name = this.noticeForm.value.category.split('|');
    this.noticeForm.value.category = {'id': Number(this.id_name[0]), 'name': this.id_name[1]};
    const loading = await this.loadingController.create();
    await loading.present();
    await this.noticeService.newNotice(this.noticeForm.value)
    .subscribe(res => {
        this.router.navigate(['/notice-list']);
        loading.dismiss();
      }, (err) => {
        console.log(err);
        loading.dismiss();
    });
  }

  ngOnInit() {
    this.findAll();
  }


}

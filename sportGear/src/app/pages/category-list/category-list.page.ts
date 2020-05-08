import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  results: Observable<any>;
  //searchTerm: string = '';
  //type: SearchType = SearchType.all;
  navigationSubscription;
  categories: any;
  category: any;

  constructor(private categoryService: CategoryService, public loadingController: LoadingController, private router: Router, public route: ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.findAll();
  }

  ngOnInit() {
    this.findAll();
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.categoryService.findAll();
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

  async findOne() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.categoryService.findOne(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.category = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  async deleteCategory(id) {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.categoryService.deleteCategory(id)
      .subscribe(res => {
        console.log(res);
        this.category = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }

}

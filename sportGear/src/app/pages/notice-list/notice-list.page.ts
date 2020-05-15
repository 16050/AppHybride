import { NoticeService } from './../../services/notice.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.page.html',
  styleUrls: ['./notice-list.page.scss'],
})
export class NoticeListPage implements OnInit {

  navigationSubscription;
  notices: any;
  notice: any;
  results: Observable<any>;

  constructor(private noticeService: NoticeService, public loadingController: LoadingController, private router: Router, public route: ActivatedRoute) {
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
    this.results = this.noticeService.findAll();
  }

  async findAll() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.noticeService.findAll()
      .subscribe(res => {
        console.log(res);
        this.notices = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
  }

  async findOne() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.noticeService.findOne(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.notice = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  async deleteNotice(id) {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.noticeService.deleteNotice(id)
      .subscribe(res => {
        console.log(res);
        this.notice = res;
        this.router.navigate(['/notice-list']);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
    });
    this.findAll();
  }

}

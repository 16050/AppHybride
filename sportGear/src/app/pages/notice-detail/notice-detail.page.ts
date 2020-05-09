import { NoticeService } from './../../services/notice.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-notice-detail',
  templateUrl: './notice-detail.page.html',
  styleUrls: ['./notice-detail.page.scss'],
})
export class NoticeDetailPage implements OnInit {

  notice: any = {};
  category: any = {};
  navigationSubscription;

  constructor(private noticeService: NoticeService, public loadingController: LoadingController, private router: Router, public route: ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.findOne();
  }

  async findOne() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.noticeService.findOne(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.notice = res;
        this.category = res.category;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  ngOnInit() {
    this.findOne();
  }

}

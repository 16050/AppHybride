import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticeCreatePage } from './notice-create.page';

describe('NoticeCreatePage', () => {
  let component: NoticeCreatePage;
  let fixture: ComponentFixture<NoticeCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticeCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

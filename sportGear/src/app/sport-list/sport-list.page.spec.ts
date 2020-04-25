import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SportListPage } from './sport-list.page';

describe('SportListPage', () => {
  let component: SportListPage;
  let fixture: ComponentFixture<SportListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SportListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

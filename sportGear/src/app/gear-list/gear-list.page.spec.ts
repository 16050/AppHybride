import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GearListPage } from './gear-list.page';

describe('GearListPage', () => {
  let component: GearListPage;
  let fixture: ComponentFixture<GearListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GearListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

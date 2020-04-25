import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GearPage } from './gear.page';

describe('GearPage', () => {
  let component: GearPage;
  let fixture: ComponentFixture<GearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

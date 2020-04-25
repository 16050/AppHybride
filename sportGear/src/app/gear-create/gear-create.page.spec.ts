import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GearCreatePage } from './gear-create.page';

describe('GearCreatePage', () => {
  let component: GearCreatePage;
  let fixture: ComponentFixture<GearCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GearCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

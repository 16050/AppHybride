import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SportCreatePage } from './sport-create.page';

describe('SportCreatePage', () => {
  let component: SportCreatePage;
  let fixture: ComponentFixture<SportCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SportCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

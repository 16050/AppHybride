import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryCreatePage } from './category-create.page';

describe('CategoryCreatePage', () => {
  let component: CategoryCreatePage;
  let fixture: ComponentFixture<CategoryCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarsComponent } from './new-cars.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('NewCarsComponent', () => {
  let component: NewCarsComponent;
  let fixture: ComponentFixture<NewCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCarsComponent, NavBarComponent ],
      imports: [ NgbModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

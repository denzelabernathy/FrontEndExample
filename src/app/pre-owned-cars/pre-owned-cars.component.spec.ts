import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOwnedCarsComponent } from './pre-owned-cars.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('PreOwnedCarsComponent', () => {
  let component: PreOwnedCarsComponent;
  let fixture: ComponentFixture<PreOwnedCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOwnedCarsComponent ],
      imports: [ NgbModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOwnedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

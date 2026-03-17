import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Educ } from './educ';

describe('Educ', () => {
  let component: Educ;
  let fixture: ComponentFixture<Educ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Educ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Educ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

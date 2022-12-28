import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePresistenceComponent } from './change-presistence.component';

describe('ChangePresistenceComponent', () => {
  let component: ChangePresistenceComponent;
  let fixture: ComponentFixture<ChangePresistenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePresistenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePresistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bin2decComponent } from './bin2dec.component';

describe('Bin2decComponent', () => {
  let component: Bin2decComponent;
  let fixture: ComponentFixture<Bin2decComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bin2decComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bin2decComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

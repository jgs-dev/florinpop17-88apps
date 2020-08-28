import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasLightsComponent } from './christmas-lights.component';

describe('ChristmasLightsComponent', () => {
  let component: ChristmasLightsComponent;
  let fixture: ComponentFixture<ChristmasLightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristmasLightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristmasLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

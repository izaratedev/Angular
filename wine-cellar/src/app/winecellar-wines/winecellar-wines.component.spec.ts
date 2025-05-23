import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinecellarWinesComponent } from './winecellar-wines.component';

describe('WinecellarWinesComponent', () => {
  let component: WinecellarWinesComponent;
  let fixture: ComponentFixture<WinecellarWinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinecellarWinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinecellarWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

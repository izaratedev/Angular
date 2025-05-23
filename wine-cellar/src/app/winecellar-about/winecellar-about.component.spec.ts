import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinecellarAboutComponent } from './winecellar-about.component';

describe('WinecellarAboutComponent', () => {
  let component: WinecellarAboutComponent;
  let fixture: ComponentFixture<WinecellarAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WinecellarAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinecellarAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

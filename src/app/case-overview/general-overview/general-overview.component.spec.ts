import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralOverviewComponent } from './general-overview.component';

describe('GeneralOverviewComponent', () => {
  let component: GeneralOverviewComponent;
  let fixture: ComponentFixture<GeneralOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

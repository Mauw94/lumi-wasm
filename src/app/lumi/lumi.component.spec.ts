import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LumiComponent } from './lumi.component';

describe('LumiComponent', () => {
  let component: LumiComponent;
  let fixture: ComponentFixture<LumiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LumiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LumiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

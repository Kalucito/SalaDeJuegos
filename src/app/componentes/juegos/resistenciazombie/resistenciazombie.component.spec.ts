import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistenciazombieComponent } from './resistenciazombie.component';

describe('ResistenciazombieComponent', () => {
  let component: ResistenciazombieComponent;
  let fixture: ComponentFixture<ResistenciazombieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResistenciazombieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResistenciazombieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

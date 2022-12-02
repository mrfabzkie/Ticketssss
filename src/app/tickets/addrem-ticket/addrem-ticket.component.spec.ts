import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremTicketComponent } from './addrem-ticket.component';

describe('AddremTicketComponent', () => {
  let component: AddremTicketComponent;
  let fixture: ComponentFixture<AddremTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddremTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddremTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloDialogComponent } from './hello-dialog.component';

describe('HelloDialogComponent', () => {
  let component: HelloDialogComponent;
  let fixture: ComponentFixture<HelloDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

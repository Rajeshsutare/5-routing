import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagrNotFoundComponent } from './pagr-not-found.component';

describe('PagrNotFoundComponent', () => {
  let component: PagrNotFoundComponent;
  let fixture: ComponentFixture<PagrNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagrNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagrNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMyvideosComponent } from './listar-myvideos.component';

describe('ListarMyvideosComponent', () => {
  let component: ListarMyvideosComponent;
  let fixture: ComponentFixture<ListarMyvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMyvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMyvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCachorrosComponent } from './listar-cachorros.component';

describe('ListarCachorrosComponent', () => {
  let component: ListarCachorrosComponent;
  let fixture: ComponentFixture<ListarCachorrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCachorrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCachorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCachorroComponent } from './perfil-cachorro.component';

describe('PerfilCachorroComponent', () => {
  let component: PerfilCachorroComponent;
  let fixture: ComponentFixture<PerfilCachorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilCachorroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCachorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

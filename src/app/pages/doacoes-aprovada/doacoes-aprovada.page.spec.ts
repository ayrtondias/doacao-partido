import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoacoesAprovadaPage } from './doacoes-aprovada.page';

describe('DoacoesAprovadaPage', () => {
  let component: DoacoesAprovadaPage;
  let fixture: ComponentFixture<DoacoesAprovadaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacoesAprovadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoacoesAprovadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

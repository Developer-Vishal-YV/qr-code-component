import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrCodeComponentPage } from './qr-code-component-page';

describe('QrCodeComponentPage', () => {
  let component: QrCodeComponentPage;
  let fixture: ComponentFixture<QrCodeComponentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrCodeComponentPage],
    }).compileComponents();

    fixture = TestBed.createComponent(QrCodeComponentPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

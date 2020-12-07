import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeMeetingPage } from './make-meeting.page';

describe('MakeMeetingPage', () => {
  let component: MakeMeetingPage;
  let fixture: ComponentFixture<MakeMeetingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeMeetingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeMeetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

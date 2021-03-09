import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostVacanciesComponent } from './post-vacancies.component';

describe('PostVacanciesComponent', () => {
  let component: PostVacanciesComponent;
  let fixture: ComponentFixture<PostVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostVacanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

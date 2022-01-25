import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientContainerComponent } from './ingredient-container.component';

describe('IngredientContainerComponent', () => {
  let component: IngredientContainerComponent;
  let fixture: ComponentFixture<IngredientContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

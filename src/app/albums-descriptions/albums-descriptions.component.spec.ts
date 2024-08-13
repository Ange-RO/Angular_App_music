import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDescriptionComponent } from './albums-descriptions.component';

describe('AlbumsDescriptionsComponent', () => {
  let component: AlbumDescriptionComponent;
  let fixture: ComponentFixture<AlbumDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

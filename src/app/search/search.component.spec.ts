import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArtistService } from '../service/artist.service';
import { By } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

const params = {
  testText: 'text',
  tickTime: 4000
};


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SearchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should contain an <input> container ', () => {
    const searchElement: HTMLElement = fixture.nativeElement;
    const input = searchElement.querySelector('input');
    expect(input.type).toEqual(params.testText);
  });

  it('should find the <input> with fixture.debugElement.nativeElement)', () => {
    const searchDe: DebugElement = fixture.debugElement;
    const searchEl: HTMLElement = searchDe.nativeElement;
    const input = searchEl.querySelector('input');
    expect(input.type).toEqual(params.testText);
  });

  it('mock the artist name (searchTerm) by the parent component', fakeAsync(() => {
    fixture.detectChanges();
    const searchDe = fixture.debugElement.query(
      By.css('input[name="search"]')
    );
    const searchEl = searchDe.nativeElement;
    searchEl.value = params.testText;
    searchEl.dispatchEvent(new Event('input'));
    tick(params.tickTime);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('input[name="search"]'));
    expect(de.nativeElement.type).toEqual(params.testText);
  }));

  it('should invoke the onkeydown to bind keydown function', fakeAsync(() => {
    fixture.detectChanges();
    const searchDe = fixture.debugElement.query(
      By.css('input[name="search"]')
    );
    const searchEl = searchDe.nativeElement;
    searchEl.value = params.testText;
    searchEl.dispatchEvent(new Event('input'));
    searchEl.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter'
      })
    );
    tick(params.tickTime);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('input[name="search"]'));
    expect(de.nativeElement.type).toEqual(params.testText);
  }));
});

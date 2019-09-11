import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { SearchBarComponent } from './search-bar.component'
import { FormsModule } from '@angular/forms'
import { AlbumService } from '../services/album.service'
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs'
import { delay } from 'rxjs/operators'
import { DebugElement } from '@angular/core'
import { By } from '@angular/platform-browser'

const params = {
  delayTime: 2000,
  tickTime: 4000,
  testText: 'test'
}

const HttpClientMock = {
  get: () => of({ results: [1, 2, 3] }).pipe(delay(params.delayTime))
}

describe('SearchBarComponent', () => {
  let component: SearchBarComponent
  let fixture: ComponentFixture<SearchBarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [FormsModule],
      providers: [
        AlbumService,
        {
          provide: HttpClient,
          useValue: HttpClientMock
        }
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should update searchTerm on user input', async () => {
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      const searchBarInput = fixture.debugElement.query(By.css('input'))
      const searchBarInputEl = searchBarInput.nativeElement
      searchBarInputEl.value = params.testText
      searchBarInputEl.dispatchEvent(new Event('input'))
      expect(fixture.componentInstance.searchTerm).toBe(params.testText)
    })
  })

  it('should invoke onSearch function on click', async () => {
    fixture.whenStable().then(() => {
      const button = fixture.debugElement.query(By.css('button'))
      const buttonEl = button.nativeElement
      buttonEl.click()
      expect(fixture.componentInstance.onSearch).toHaveBeenCalled()
    })
  })

  it('should invoke onSearch functon on keyupEnter', async () => {
    fixture.whenStable().then(() => {
      const searchBarInput = fixture.debugElement.query(By.css('input'))
      const searchBarInputEl = searchBarInput.nativeElement
      searchBarInputEl.dispatchEvent(new Event('focus'))
      searchBarInputEl.dispatchEvent(
        new KeyboardEvent('keypress', { key: 'enter' })
      )
      expect(fixture.componentInstance.onSearch).toHaveBeenCalled()
    })
  })
})

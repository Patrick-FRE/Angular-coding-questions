import { AlbumService } from './album.service'
import { TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { initialValue } from './album.service'

describe('AlbumService', () => {
  let service: AlbumService
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumService],
      imports: [HttpClientModule]
    })
    service = TestBed.get(AlbumService)
  })

  it('should create', () => {
    expect(service).toBeTruthy()
  })

  it(`should contain albums subject with initial value ${initialValue.albums}`, () => {
    const album$ = service.albums
    let albumInitialState
    const expectedValue = null
    album$.subscribe(data => (albumInitialState = data))
    expect(albumInitialState).toEqual(expectedValue)
  })
})

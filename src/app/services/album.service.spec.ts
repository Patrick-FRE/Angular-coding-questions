import { AlbumService } from './album.service'
import { TestBed, fakeAsync, tick } from '@angular/core/testing'
import { HttpClient } from '@angular/common/http'
import { initialValue } from './album.service'
import { of } from 'rxjs'
import { delay } from 'rxjs/operators'

const params = {
  delayTime: 2000,
  tickTime: 4000
}

const HttpClientMock = {
  get: () => of({ results: [1, 2, 3] }).pipe(delay(params.delayTime))
}

describe('AlbumService', () => {
  let service: AlbumService
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlbumService,
        {
          provide: HttpClient,
          useValue: HttpClientMock
        }
      ]
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

  it(`should have a getAlbums method take one param (artist name) and return albums`, fakeAsync(() => {
    let albumState
    let isFetchingState
    const album$ = service.albums
    const isFetching$ = service.isFetchingAlbums

    album$.subscribe(data => {
      albumState = data
    })
    isFetching$.subscribe(data => {
      isFetchingState = data
    })

    expect(isFetchingState).toBe(null)
    service.getAlbums('test')
    expect(isFetchingState).toBe(true)
    tick(params.tickTime)
    expect(isFetchingState).toBe(false)
    console.log(albumState)
    expect(albumState).toEqual([1, 2, 3])
  }))
})

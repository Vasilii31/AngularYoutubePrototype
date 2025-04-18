import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  public apiKey: string = "";
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  private readonly http: HttpClient = inject(HttpClient);

  searchVideos(query: string): Observable<any> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('q', query)
      .set('key', this.apiKey)
      .set('maxResults', '10');

    return this.http.get(`${this.apiUrl}/search`, { params });
  }
}

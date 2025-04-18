import { Component, input, signal, ModelSignal  } from '@angular/core';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private readonly _youtubeService: YoutubeApiService){}

  searchTerm = signal('');
  //searchTerm = input<string>("coucou");
  videos = signal<any[]>([]);   
  //videos: any[] = [];

  ngOnInit(): void {
    this._youtubeService.searchVideos("Angular tutorial")
      .subscribe(response => {
        this.videos.set(response.items);
      });
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  search() {
    console.log(this.searchTerm());
    const query = this.searchTerm().trim();
    if (query.length > 2) {
      this._youtubeService.searchVideos(query).subscribe(response => {
        this.videos.set(response.items);
      });
    }
}
}

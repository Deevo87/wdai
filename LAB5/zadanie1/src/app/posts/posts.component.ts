import { getSafePropertyAccessString } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  constructor(private configService: ConfigService) {
  }
  
}

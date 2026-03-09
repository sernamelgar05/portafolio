import { Component } from '@angular/core';

interface TechItem {
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly techStack: TechItem[] = [
    { name: 'Laravel 11' },
    { name: 'Spring Boot 3' },
    { name: 'Blade' },
    { name: 'React' },
    { name: 'Angular 19' },
    { name: 'Kotlin' },
    { name: 'Docker' },
    { name: 'Firebase' },
    { name: 'PostgreSQL' },
    { name: 'JavaScript' },
    { name: 'Vue.js' }
  ];
}

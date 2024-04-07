import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name?: string
  date?: string

  onNameChange(event: Event) {
    this.name = (event?.target as HTMLInputElement).value
  }

  onDateChange(event: Event) {
    this.date = (event?.target as HTMLInputElement).value
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, DatePipe, CurrencyPipe, DecimalPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name?: string
  date?: string
  amount?: number
  height?: number

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2010
  }

  onHeightChange(event: Event) {
    this.height = parseFloat((event?.target as HTMLInputElement).value)
  }

  onNameChange(event: Event) {
    this.name = (event?.target as HTMLInputElement).value
  }

  onDateChange(event: Event) {
    this.date = (event?.target as HTMLInputElement).value
  }

  onAmountChange(event: Event) {
    this.amount = parseFloat((event?.target as HTMLInputElement).value)
  }
}

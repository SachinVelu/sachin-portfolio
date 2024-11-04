import { Component, input } from '@angular/core';
import { ICardData } from '../experience.model';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent {
  public cardData = input.required<ICardData>()
  public currentYear = new Date().getFullYear().toString();
}

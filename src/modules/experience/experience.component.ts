import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ICardData } from './experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [HeaderComponent,ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  public experienceInfo:ICardData[]=[
    {
      fromYear:'2020',
      toYear:'2024',
      role:'Associate Software Developer',
      organization:'Solverminds Solutions & Technologies',
      description:'Designed and developed full-stack solutions for maritime human resource planning using a scheduler-based concept. I built responsive UIs, developed APIs, managed databases, and ensured system security and scalability, delivering efficient and seamless performance.',
      skills:['Angular','HTML','CSS','Java Script','Type Script','Java','Springboot','Git']
    }
  ]

}

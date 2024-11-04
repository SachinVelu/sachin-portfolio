import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IProjectData } from '../project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  public projectData = input.required<IProjectData>();
}

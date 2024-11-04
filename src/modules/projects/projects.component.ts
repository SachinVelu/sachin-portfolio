import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { IProjectData } from './project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeaderComponent,ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  public projectCardInfo:IProjectData[]=[
    {
      imagePath:"/public/assets/other_images/portfolio.png",
      projectName:"Personal Portfolio",
      projectDescription:"Portfolio site built with Angular and Tailwind CSS\,leveraging Spring Boot for a robust backend.",
      githubUrl:""
    }
  ]
}

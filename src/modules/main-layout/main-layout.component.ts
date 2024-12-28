import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialMediaComponent } from '../../components/social-media/social-media.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TopbarComponent,CommonModule,RouterModule,UserProfileComponent,SocialMediaComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  public switchDarkMode = false;
  public gradient = "rgba(29, 78, 216, 0.15)";
  countryData!: {};
  constructor(private renderer: Renderer2, private el: ElementRef,private http:HttpClient) {}

  ngOnInit(): void {
    const light = this.el.nativeElement.querySelector('#light');
    this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
      // Update the background position dynamically based on cursor movement
      const background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, ${this.gradient}, transparent 80%)`;
      this.renderer.setStyle(light, 'background', background);
    });
  }

  emitDarkMode(event?:boolean){
    const htmlElement = this.renderer.selectRootElement('html', true);
    this.gradient = htmlElement.classList.contains('dark') ? "rgba(4, 47, 46, 0.15)" : "rgba(29, 78, 216, 0.15)";
    this.switchDarkMode = htmlElement.classList.contains('dark') ? true : false;
    console.log(this.switchDarkMode);
  }

  fetchCountry(){
    this.http.get('https://restcountries.com/v3.1/name/india').subscribe((res:any)=>{
      this.countryData = res
    })
  }
}

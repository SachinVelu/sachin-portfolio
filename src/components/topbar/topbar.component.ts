import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MENU_LIST, SOCIAL_MEDIA_LIST } from './topbar.const';
import { IMenuItem, ISocialMedia } from './topbar.model';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit{

  public isLoaded = false;
  public darkMode = false;
  public showList = false;
  public contentHeight = 0;
  public menuList:IMenuItem[] = MENU_LIST;
  public socialMediaList:ISocialMedia[] = SOCIAL_MEDIA_LIST;
  public emitDarkMode = output<boolean>();

  constructor(private renderer:Renderer2){}

  ngOnInit(): void {
    setTimeout(()=>{
      this.isLoaded = true;
    },100);
  }

  toggleDarkMode(){
    this.darkMode = !this.darkMode;
    const htmlTag = this.renderer.selectRootElement("html",true);
    if(this.darkMode){
      this.renderer.addClass(htmlTag,'dark');
    }else{
      this.renderer.removeClass(htmlTag,'dark')
    }
    this.emitDarkMode.emit(true);
  }

  openMenuList(contentDiv: HTMLElement) {
      if (!this.showList) {
        this.contentHeight = contentDiv.scrollHeight;
      }
      this.showList = !this.showList;
    }

  openLink(link: string) {
     window.open(link, '_blank');
    }

}

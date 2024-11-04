import { Component, input } from '@angular/core';
import { SOCIAL_MEDIA_LIST } from '../topbar/topbar.const';
import { ISocialMedia } from '../topbar/topbar.model';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css'
})
export class SocialMediaComponent {
  public socialMediaList:ISocialMedia[] = SOCIAL_MEDIA_LIST;
  public darkMode = input<boolean>(false);

  getDarkModeImg(imgPath:string):string{
    return imgPath?.split('.')[0]+'-dark.svg'
  }
}

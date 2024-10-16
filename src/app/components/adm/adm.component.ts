import { Component } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adm',
  standalone: true,
  imports: [MenubarComponent, CommonModule],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.scss'
})
export class AdmComponent {

}

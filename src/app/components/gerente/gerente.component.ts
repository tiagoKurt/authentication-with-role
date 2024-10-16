import { Component } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gerente',
  standalone: true,
  imports: [MenubarComponent, CommonModule],
  templateUrl: './gerente.component.html',
  styleUrl: './gerente.component.scss'
})
export class GerenteComponent {

}

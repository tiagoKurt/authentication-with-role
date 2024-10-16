import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AuthService } from '../../services/auth/auth.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { MenuItemCommandEvent } from 'primeng/api';
@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MenubarModule, CommonModule, ConfirmDialogModule, ButtonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
  providers:[ConfirmationService, MessageService]
})
export class MenubarComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router,
              private _authSercice: AuthService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService
  ){}

    ngOnInit() {
          this.items = [
            {
              label: 'Home',
              icon: 'pi pi-home',
              command: () => this.router.navigate(['/home'])
            },
            {
              label: 'Administrador',
              icon: 'pi pi-star',
              command: () => this.router.navigate(['/admin'])
            },
            {
              label: 'Gerente',
              icon: 'pi pi-star',
              command: () => this.router.navigate(['/gerente'])
            },
            {
              label: 'Configurações',
              icon: 'pi pi-cog',
              items:[
                {
                  label: 'Perfil',
                  icon: 'pi pi-user',
                  command: () => this.router.navigate(['/profile'])
                },
                {
                  label: 'Logout',
                  icon: 'pi pi-sign-out',
                  command: () => this._authSercice.logout()
                }
              ]
            },
          ];
        }

}

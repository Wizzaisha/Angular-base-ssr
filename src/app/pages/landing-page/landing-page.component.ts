import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../shared/components/buttons/primary-button/primary-button.component';
import { ThemeService } from '../../shared/service/theme/theme.service';

@Component({
  selector: 'app-landing-page',
  imports: [PrimaryButtonComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  constructor(private themeService: ThemeService) {}

  handleToggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

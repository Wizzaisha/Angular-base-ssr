import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PrimaryButtonComponent } from '../../shared/components/buttons/primary-button/primary-button.component';
import { ThemeService } from '../../shared/service/theme/theme.service';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-module1',
  imports: [TableModule, PrimaryButtonComponent, SelectModule, FormsModule],
  templateUrl: './module1.component.html',
  styleUrl: './module1.component.css',
})
export class Module1Component {
  constructor(private themeService: ThemeService) {}

  handleToggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

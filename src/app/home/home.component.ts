import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type Theme = 'minimal' | 'dark';
const THEME_KEY = 'preferred-theme';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected activeTheme = signal<Theme>(
    (localStorage.getItem(THEME_KEY) as Theme) ?? 'minimal'
  );

  setTheme(theme: Theme) {
    this.activeTheme.set(theme);
    localStorage.setItem(THEME_KEY, theme);
  }
}

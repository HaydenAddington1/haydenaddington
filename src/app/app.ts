import { Component, signal } from '@angular/core';

export type Theme = 'minimal' | 'dark';

const THEME_KEY = 'preferred-theme';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Hayden Addington');
  protected activeTheme = signal<Theme>(
    (localStorage.getItem(THEME_KEY) as Theme) ?? 'minimal'
  );

  setTheme(theme: Theme) {
    this.activeTheme.set(theme);
    localStorage.setItem(THEME_KEY, theme);
  }
}

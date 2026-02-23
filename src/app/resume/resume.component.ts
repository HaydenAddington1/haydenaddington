import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type Theme = 'minimal' | 'dark';
const THEME_KEY = 'preferred-theme';

@Component({
  selector: 'app-resume',
  imports: [RouterLink],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  protected activeTheme = signal<Theme>(
    (localStorage.getItem(THEME_KEY) as Theme) ?? 'minimal'
  );

  setTheme(theme: Theme) {
    this.activeTheme.set(theme);
    localStorage.setItem(THEME_KEY, theme);
  }
}

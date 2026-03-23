import { BreakpointObserver } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { map, Observable, share, shareReplay } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private BreakpointObserver = inject(BreakpointObserver)

  isMobile$ : Observable<boolean> = this.BreakpointObserver
  .observe('(max-width: 1233px)')
  .pipe(
    map(result =>result.matches),
    shareReplay()
  )

  isMenuOpen = false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSobre() {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  scrollToProjects() {
    const element = document.getElementById('session');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  scrollToTecnologias() {
    const element = document.getElementById('tec');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  scrollToEducacao() {
    const element = document.getElementById('educ');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

}

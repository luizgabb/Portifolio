import { Component, signal, OnInit, HostListener} from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Main } from "./components/main/main";
import { Projects } from "./components/projects/projects";
import { Esteira } from "./components/esteira/esteira";
import * as AOS from 'aos';
import { Epx } from "./components/epx/epx";
import { Educ } from "./components/educ/educ";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, Main, Projects, Esteira, Epx, Educ, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('Portifolio');

  ngOnInit() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    AOS.init({
    duration: 1000,
    once: true,
  });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }

  currentIndex = 0;
  totalSections = 5;
  isScrolling = false;

  onWheel(event: WheelEvent) {

    if (this.isScrolling) return;

    if (event.deltaY > 0) {
      if (this.currentIndex < this.totalSections - 1) {
        this.currentIndex++;
        this.scrollToCurrent();
      }
    } else if (event.deltaY < 0) {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.scrollToCurrent();
      }
    }
  }

  scrollToCurrent() {
    this.isScrolling = true;

    const targetId = `section-${this.currentIndex}`;
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, 500);
  }

  onSectionSelected(index: number) {
  this.currentIndex = index;
  this.scrollToCurrent();
}
}

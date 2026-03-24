import { Component, EventEmitter, Output, afterNextRender } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  scrollToProjects() {
    const element = document.getElementById('session');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

   @Output() navigate = new EventEmitter<number>();

  goTo(index: number) {
    this.navigate.emit(index);
  }

  constructor() {
    afterNextRender(() => {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        disable: 'mobile'
      });

      setTimeout(() => {
        AOS.refreshHard();
      }, 100);
    });
  }
}

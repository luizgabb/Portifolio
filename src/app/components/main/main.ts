import { Component, EventEmitter, Output } from '@angular/core';

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
}

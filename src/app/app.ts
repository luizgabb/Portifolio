import { Component, signal, OnInit} from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Main } from "./components/main/main";
import { Projects } from "./components/projects/projects";
import { Esteira } from "./components/esteira/esteira";
import * as AOS from 'aos';
import { Epx } from "./components/epx/epx";

@Component({
  selector: 'app-root',
  imports: [Navbar, Main, Projects, Esteira, Epx],
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
}

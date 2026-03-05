import { Component, signal, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Main } from "./components/main/main";
import { Projects } from "./components/projects/projects";
import { Esteira } from "./components/esteira/esteira";
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Main, Projects, Esteira],
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
    once: true
  });
  }
}

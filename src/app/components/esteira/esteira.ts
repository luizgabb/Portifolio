import { Component } from '@angular/core';

@Component({
  selector: 'app-esteira',
  imports: [],
  templateUrl: './esteira.html',
  styleUrl: './esteira.scss',
})
export class Esteira {
  techs = [
    { nome: 'Angular', logo: '/svg/Angular.svg' },
    { nome: 'TypeScript', logo: '/svg/TypeScript.svg' },
    { nome: 'Node.js', logo: '/svg/Node.js.svg' },
    { nome: 'Html', logo: '/svg/HTML5.svg' },
    { nome: 'Css', logo: '/svg/CSS3.svg' },
    { nome: 'Sass', logo: '/svg/Sass.svg' },
    { nome: 'Java', logo: '/svg/Java.svg' },
    { nome: 'Spring', logo: '/svg/Spring.svg' },
    { nome: 'Aws', logo: '/svg/AWS.svg' },
    { nome: 'MySql', logo: '/svg/MySQL.svg' },
    { nome: 'Postgres', logo: '/svg/PostgresSQL.svg' },
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const target = document.querySelector('.reveal');
    if (target) {
      observer.observe(target);
    }
  }
}

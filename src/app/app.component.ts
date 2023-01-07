import { trigger, style, animate, transition } from '@angular/animations';
import { Component } from '@angular/core';

const questions: string[] = [
  "Je peux donner l'impression d'être plus compétent que je ne le suis réellement.",
  "J'évite d'être évalué si je le peux",
  "Je déteste que les autres m'évaluent",
  "Je réussi souvent une tâche même si j'avais peur de ne pas bien la réaliser avant de commencer",
  "Je pense parfois que j'ai obtenu ma position actuelle car je me trouvais au bon endroit au bon moment ou que je connaissais les bonnes personnes",
  "Je réalise rarement un projet ou une tâche aussi bien que je le voudrais",
  "J'ai du mal à accepter des compliments sur mes réalisations",
  "Lorsque j'ai réussi quelque chose et été reconnu pour mes réalisations, je doute que je puisse continuer à répéter ce succès",
  "J'ai peur de l'échec",
  "Je crains que les autres puissent un jour découvrir mon manque de connaissances ou de compétences",
  "J'ai tendance à attribuer mon succès à des causes externes",
  "Je pense que le succès amène jalousie et rejet des autres",
  "Je ressasse en permanence la liste des choses que j'aurai du faire"
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('1s ease-out', style({ opacity: 1}))
          ]
        ),
      ]
    )
  ]
})
export class AppComponent {
  step: number = 14;
  points: number[] = [];
  questions = questions;

  get nbPercent(): number {
    const percent = this.points.reduce((a, b) => a + b, 0) / (this.points.length*3) * 100;
    return Math.round(percent);
  }

  get results(): string {
    if (this.nbPercent < 30) {
      return `Vous n\'êtes pas touché par le syndrome de l\'imposteur (${this.nbPercent}%)`;
    } else if (this.nbPercent < 60) {
      return `Vous êtes légèrement touché par le syndrome de l\'imposteur mais réussissez à le gérer (${this.nbPercent}%)`;
    }
    return `Vous êtes très touché par le syndrome de l\'imposteur à ${this.nbPercent}%`;
  }

  nextStep(): void {
    this.step++;
  }

  onClick(points: number): void {
    console.log(this.step - 1);
    this.points[this.step - 1] = points;
    this.nextStep();
  }

  previousStep(): void {
    this.step--;
  }

  reset(): void {
    this.step = 0;
    this.points = [];
  }
}

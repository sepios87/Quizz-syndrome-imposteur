import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() question: string = '';
  @Input() value: number | undefined;
  @Output() onResponse = new EventEmitter<number>();

  onClick(value: number): void {
    this.onResponse.emit(value);
  }

}

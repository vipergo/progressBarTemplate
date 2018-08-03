import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'step-progress-bar',
  templateUrl: './step-progress-bar.component.html',
  styleUrls: ['./step-progress-bar.component.scss'],
})
export class StepProgressBarComponent{

  ngOnChanges(changes: SimpleChanges) {
    if(changes.steps){
      this.stageWidth = 100 / this.steps.length;
      this.currentStepIndex  = this.steps.indexOf(this.currentStep);
    }
  }

  @Input() private steps: Array<string> = [];
  @Input() private currentStep: string;
  private stageWidth: number;
  private currentStepIndex: number;

}

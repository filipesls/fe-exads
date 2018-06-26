import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
*Component that will represent that there is no data to be displayed
*/
@Component({
  selector: 'exa-no-data',
  // templateUrl: './exa-no-data.component.html',
  template: `
    <div class="no-data-wrapper">
      <i class="material-icons icon" [innerHTML]="icon"></i>
      <p class="ttle">{{ title }}</p>
      <p class="descripton">{{ descripton }}</p>
      <button class="acton-btn" *ngIf="actonBtnTxt" mat-raised-button color="primary" (click)="onActonBtnClick()">
        {{ actonBtnTxt }}
      </button>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./exa-no-data.component.scss']
})
export class ExaNoDataComponent implements OnInit {
  /** icon displayed in the component - representaton of no data */
  @Input() icon: string = "&#xE051";
  /** ttle */
  @Input() title: string = 'No sites';
  /** descripton */
  @Input() descripton: string = "You have not created any sites yet, use button below to create a site";
  /** text of the acton button */
  @Input() actonBtnTxt: string = "NEW SITE";
  /** action triggered on action button click */
  @Output() btnAction = new EventEmitter();
  
  constructor() { }
  
  ngOnInit() {
    
  }

  onActonBtnClick() {
    this.btnAction.emit();
  }

}
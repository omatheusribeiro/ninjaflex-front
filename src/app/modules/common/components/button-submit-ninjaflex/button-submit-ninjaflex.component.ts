import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'button-submit-ninjaflex',
    templateUrl: './button-submit-ninjaflex.component.html',
    styleUrls: ['./button-submit-ninjaflex.component.scss']
  })

export class ButtonSubmitNinjaFlexComponent {
    @Input() type = "";
    @Input() name = "";
    @Output() eventClick = new EventEmitter<any>();

    eventButton(event: any){
      this.eventClick.emit(event);
    }
}
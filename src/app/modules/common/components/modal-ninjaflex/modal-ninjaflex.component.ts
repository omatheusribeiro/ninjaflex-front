import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
  tittle: string;
  message: string;
}

@Component({
  selector: 'modal-ninjaflex',
  templateUrl: 'modal-ninjaflex.component.html',
  styleUrls: ['./modal-ninjaflex.component.scss']
})

export class ModalNinjaFlexComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<ModalNinjaFlexComponent>,) {}

  eventButton(): void {
    this.dialogRef.close();
  }
}
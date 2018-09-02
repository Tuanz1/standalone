import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
@Component({
  selector: 'app-habit-create',
  templateUrl: './habit-create.component.html',
  styleUrls: ['./habit-create.component.scss']
})
export class HabitCreateComponent implements OnInit {
  custom: boolean = true;
  repeat;
  constructor(public popoverCtrl: PopoverController) {}

  ngOnInit() {}
  cancel() {
    this.popoverCtrl.dismiss();
  }
}

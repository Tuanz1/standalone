import {Component} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {PopoverController} from '@ionic/angular';
import {HabitCreateComponent} from '../component/habit-create/habit-create.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  check: boolean = false;
  habits = [
    {title: 'test', records: {yes: 'true', tod: 'true', tom: 'true'}},
    {title: 'test', records: {yes: 'true', tod: 'false', tom: 'true'}}
  ]
  constructor(
      public actionSheetController: ActionSheetController,
      public popoverController: PopoverController) {}
  tap() {
    console.log('tap func');
  }
  press() {
    console.log('press fuc');
  }
  change(habit, v) {
    console.log(habit);
    // this.check = !this.check;
    if (v.yes == 'true')
      v.yes = 'false';
    else
      v.yes = 'true';
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '操作',
      buttons: [

        {
          text: '存档',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: '编辑',
          icon: 'create',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: '删除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: '取消',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async openPopover() {
    const popover = await this.popoverController.create(
        {component: HabitCreateComponent, translucent: true});
    return await popover.present();
  }
}

import {Component} from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  check: boolean = false;
  constructor(public actionSheetController: ActionSheetController) {}
  tap() {
    console.log('tap func');
  }
  press() {
    console.log('press fuc');
  }
  change() {
    this.check = !this.check;
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
}

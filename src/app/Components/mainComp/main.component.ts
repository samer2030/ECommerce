import { Component } from '@angular/core';

@Component({
    selector: "mainComp",
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent{
    title = "mainComp";
    storeName: string = 'Sam Store';
    storeLogo: string = '';
    clientName: string = '';
}
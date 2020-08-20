import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  styles: [],
})


export class AppComponent {
  title = 'signup-category';

  name: string = '';

  setValue() {
    console.log('hey');
  }

  categories = [
    { id: 11, name: 'Women-Owned Small Businesses', value: false },
    { id: 12, name: 'Historically Underutilized Business (hubz)', value: false },
    { id: 13, name: 'Indian Economic Enterprise', value: true },
    { id: 14, name: '8(a) Small Business', value: false },
    { id: 15, name: 'Veteran-Owned Small Businesses', value: false },
    { id: 16, name: 'Service-Disabled Veteran-Owned Business', value: false },
  ];

  myCategory = this.categories [0];
}


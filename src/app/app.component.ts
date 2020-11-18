import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practica-angular-store';

  items = ['nicolas', 'julian', 'perez'];

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/empire.jpg',
      title: 'Starwars sweater',
      price: 5000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/invade.jpg',
      title: 'Invader sweater',
      price: 5000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/lucas-y-bugs.jpg',
      title: 'Lucas & Bugs sweater',
      price: 5000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/misterio-sweater1.jpg',
      title: 'Scooby Doo sweater',
      price: 5000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/my-neighbor.jpg',
      title: 'Totoro sweater',
      price: 5000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/naruto.jpg',
      title: 'Naruto sweater',
      price: 5000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '7',
      image: 'assets/images/offline-dino-.jpg',
      title: 'Offline Dino sweater',
      price: 5000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '8',
      image: 'assets/images/pinky.jpg',
      title: 'Pinky & The Brain sweater',
      price: 5000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '9',
      image: 'assets/images/ppg.jpg',
      title: 'Power Puff Girls sweater',
      price: 5000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '10',
      image: 'assets/images/tomyjerry.jpg',
      title: 'Tom & Jerry sweater',
      price: 5000,
      description: 'bla bla bla bla bla'
    }
  ];

  addItem() {
    this.items.push ('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}

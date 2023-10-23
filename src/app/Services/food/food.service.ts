import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getAllByTag(arg0: any): Food[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getAllFoodsbyTag(tag:string):Food[]{
    return tag == "All"?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food/food1.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/food/food2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/food/food3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
    ];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName: string[] = ['Spiderman' , 'Ironman' , 'Hulk' , 'Thor', 'Deadpool'];
  public deletedHero?:string;

  removeLastHero(){
    this.deletedHero = this.heroName.pop();
  }

}

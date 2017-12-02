import { Component } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  result = [0, 0, 0, 0, 0];
  reels =
    [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3, 4, 5, 6, 7 , 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3, 4, 5, 6, 7 , 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3, 4, 5, 6, 7 , 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3, 4, 5, 6, 7 , 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3, 4, 5, 6, 7 , 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ]
  match = 0;
  getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
  randomPositionsForReels() {
    this.result = [
        this.reels[0][this.getRandomNumber()],
        this.reels[1][this.getRandomNumber()],
        this.reels[2][this.getRandomNumber()],
        this.reels[3][this.getRandomNumber()],
        this.reels[4][this.getRandomNumber()]
      ];
}
  findMatch(i) {
    let m = 0;
    for(let n = 0; n < 5; n++) {
      if(i === this.result[n] ){
          m += 1;
      }
    }
    return m;
}
  findMax(array){
    let result = 0;
    for(let n = 0; n < 5; n++){
      if(result <= array[n]){
        result = array[n];
      }
    }
    return result;
  }
  getVisibleMatchesForReelsPositions() {
    const mathes = [
      this.findMatch(this.result[0]),
      this.findMatch(this.result[1]),
      this.findMatch(this.result[2]),
      this.findMatch(this.result[3]),
      this.findMatch(this.result[4])
    ];
    this.match = this.findMax(mathes);
  }
}

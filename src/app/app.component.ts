import { Component } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4]
  draggedIndex: number | null = null
  draggedNumber: number | null = null
  
  onDragStart(event: DragEvent, index: number) {
    this.draggedIndex = index 
  }

  onDragOver(event: DragEvent){
    event.preventDefault()
  }
  
  onDrop(event: DragEvent, targetIndex: number) {
    if (this.draggedIndex !== null) {
      this.draggedNumber = this.numbers[this.draggedIndex];
      this.numbers.splice(this.draggedIndex, 1);
      this.numbers.splice(targetIndex, 0, this.draggedNumber);
      this.draggedIndex = null;
    }
  }
}
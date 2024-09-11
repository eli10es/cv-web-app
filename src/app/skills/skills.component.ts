import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = ['Angular', 'Javascript', 'C#', 'SQL'];

  getRandomRotation() {
    let randomVal = Math.random() * 30 - 15;
    return `rotate(${randomVal}deg)`;
  }

  startDragging() {}
}

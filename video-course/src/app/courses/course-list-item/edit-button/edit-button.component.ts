import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vc-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {
  @Input() itemId;
  @Output() editItemByIdEvent = new EventEmitter<number>();

  editItemById() {
    this.editItemByIdEvent.emit(this.itemId);
  }

  constructor() { }

  ngOnInit(): void {
  }
}

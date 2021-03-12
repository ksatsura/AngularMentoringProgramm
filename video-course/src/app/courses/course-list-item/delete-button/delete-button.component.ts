import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vc-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {
  @Output() deleteItemByIdEvent = new EventEmitter<number>();
  @Input() itemId;

  deleteItemById() {
    this.deleteItemByIdEvent.emit(this.itemId);
  }

  constructor() { }

  ngOnInit(): void {
  }
}

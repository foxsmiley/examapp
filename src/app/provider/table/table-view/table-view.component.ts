import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { TableCompose } from '../table-compose';
import { Utility } from '../../utility';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, OnChanges {

  @Input() data: TableCompose;
  @Input() title: string;
  @Input() add: any;
  @Input() entries: number;
  @Output() itemClick = new EventEmitter<any>();
  @Output() addClick = new EventEmitter<any>();
  selected: any;
  elements: any[];
  loaded: boolean;

  constructor() { }

  ngOnInit() {
    if (!this.entries) this.entries = 7;
  }

  ngOnChanges(changes: any): void {
  }

  onclick(item) {
    this.selected = item;
    this.itemClick.emit(item);
  }

  isSelected(item): boolean {
    return Utility.isEquivalent(this.selected, item);
  }

  loadElements($event) {
    this.elements = $event;
  }

  onAdd() {
    this.addClick.emit();
  }

  selectedHead: any;
  sortByHeader(head) {
    this.selectedHead = head;
    console.log(head);
    var sortedData = this.data.body.sort((objA, objB) => {
      if (objA[head.Name] < objB[head.Name])
        return -1;
      if (objA[head.Name] > objB[head.Name])
        return 1;
      return 0;
    });
    this.data.body = [];
    setTimeout(() => {
      this.data.body = sortedData;
    }, 1)
  }
}
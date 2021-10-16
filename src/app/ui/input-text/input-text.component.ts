import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() label: any;
  @Input() value: any;
  @Input() name: any;
  @Input() messages: any;
  @Input() style: any;
  @Input() disable = false;
  @Input() required = false;
  @Input() length: any;
  @Input() upperCase = false;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  checkPattern(event: any) {
    if (this.upperCase) {
      this.value = this.value.toUpperCase();
    }
    this.valueChange.emit(this.value);
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-mat-select',
  templateUrl: './custom-mat-select.component.html',
  styleUrls: ['./custom-mat-select.component.scss']
})
export class CustomMatSelectComponent implements OnInit {

  constructor() { }

  @Input() label: any;
  @Input() options: any;
  @Input() optionNameProperty: any;
  @Input() optionValueProperty: any;
  @Input() selectedValue: any;

  @Output() optionChange = new EventEmitter();

  private selectedOption: any;

  ngOnInit() {
    this.setSelectedOption();
  }

  onOptionChange(event: any) {
    this.setSelectedOption();
    this.optionChange.emit(this.selectedOption);
  }

  setSelectedOption() {
    this.selectedOption = this.options.find(x => x[this.optionValueProperty] === this.selectedValue);
  }
}

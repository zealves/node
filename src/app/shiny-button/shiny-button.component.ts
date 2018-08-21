import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shiny-button',
  templateUrl: './shiny-button.component.html',
  styleUrls: ['./shiny-button.component.css']
})


export class ShinyButtonComponent implements OnInit {
	
 text = 'abc';	
  @Input('color') public color: string;
  @Output('onColorChange') public colorEventEmitter: EventEmitter<string> = new EventEmitter();
  
  constructor() { 
	this.color = this.generateRandomColor();
  }

  ngOnInit() {

  }

  callback(event){
    generateRandomColor();
  }
  
  generateRandomColor(){
	const newColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    this.colorEventEmitter.next(newColor);
	return newColor;
  }
  
  onModelChanges(value){
    this.color = 'pp';
  }
  
}
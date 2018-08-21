import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meu-projeto';
  text = 'abc';
  isVisible = true;
  items = new Array(1,2,3);
  

  
  onModelChange(value){
    if(value == '')
	{
		this.text = 'dsdfdf';
		this.isVisible = false;
	}
	else
	{
		this.isVisible = true;
		this.text = value;
	}
  }
  
}

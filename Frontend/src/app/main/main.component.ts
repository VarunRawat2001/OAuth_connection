import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import {saveAs} from 'file-saver'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service: ConnectionService ) { }

  ngOnInit(): void {
    this.getdata()
  }

  blob:Blob=new Blob();

  getdata()
  {
    this.service.getdata().subscribe((res)=>
    {
      this.blob = new Blob([JSON.stringify(res, null, 2)], {type : 'application/json'});
      console.log(res);
    })
  }

  download()
  {
  saveAs(this.blob, 'text.txt')
  }
  

}

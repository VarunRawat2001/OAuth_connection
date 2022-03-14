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
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(private service: ConnectionService) { }

  ngOnInit(): void {

  }

  userForm = new FormGroup({
    'clientId':new FormControl('',Validators.required),
    'scope':new FormControl('',Validators.required),
    'url':new FormControl('',Validators.required),
    'responseType':new FormControl('',Validators.required)
  
  })

  userSubmit()
  {
    if(this.userForm.valid)
    {
    this.service.getData(this.userForm.value).subscribe((res)=>
    {
       this.userForm.reset();
       window.alert("Data sent Successfully")
    })
    }
    else
    {
      window.alert("All fields are Required")
    }
  }

}

import { Component, OnInit,Input } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  constructor(private toastr: ToastrService) {}
  @Input()
  iconName!: string;
  ngOnInit(): void {
  }

  public str:String="a button is click no is: ";

}

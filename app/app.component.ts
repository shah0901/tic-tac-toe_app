import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  


    constructor(private toastr:ToastrService){}

  title = 'tic-tac-toe';
  arrayItems: string[] =new Array(9).fill('empty');
  winMessage:string='';
  isCross:boolean=false;

  handleClick = (itemNumber:number) =>{
    if(this.winMessage){
      return this.toastr.success(this.winMessage);
    }
    if(this.arrayItems[itemNumber]==='empty'){
      this.arrayItems[itemNumber] = (this.isCross)?'cross':'circle';
      this.isCross = !this.isCross;
    }
    else{
      return this.toastr.info('Already Filled Bro!!!');
    }
    this.checkIsWinner();
    return ;
  }
  checkIsWinner=() =>{
    if(this.arrayItems[0]===this.arrayItems[1]&&
      this.arrayItems[0]===this.arrayItems[2]&&
      this.arrayItems[0]!=='empty'){
        this.winMessage = `${this.arrayItems[0]} won`
      }
    else if(this.arrayItems[0]===this.arrayItems[3]&&
      this.arrayItems[0]===this.arrayItems[6]&&
      this.arrayItems[0]!=='empty'){
        this.winMessage = `${this.arrayItems[0]} won`
      }
    else if(this.arrayItems[0]===this.arrayItems[4]&&
      this.arrayItems[0]===this.arrayItems[8]&&
      this.arrayItems[0]!=='empty'){
        this.winMessage = `${this.arrayItems[0]} won`
      }
    else if(this.arrayItems[1]===this.arrayItems[4]&&
      this.arrayItems[1]===this.arrayItems[7]&&
      this.arrayItems[1]!=='empty'){
        this.winMessage = `${this.arrayItems[1]} won`
      }
    else if(this.arrayItems[2]===this.arrayItems[5]&&
      this.arrayItems[8]===this.arrayItems[2]&&
      this.arrayItems[2]!=='empty'){
        this.winMessage = `${this.arrayItems[2]} won`
      }
    else if(this.arrayItems[2]===this.arrayItems[4]&&
      this.arrayItems[6]===this.arrayItems[2]&&
      this.arrayItems[2]!=='empty'){
        this.winMessage = `${this.arrayItems[2]} won`
      }
    else if(this.arrayItems[3]===this.arrayItems[4]&&
      this.arrayItems[4]===this.arrayItems[5]&&
      this.arrayItems[3]!=='empty'){
        this.winMessage = `${this.arrayItems[3]} won`
      }
    else if(this.arrayItems[6]===this.arrayItems[7]&&
      this.arrayItems[6]===this.arrayItems[8]&&
      this.arrayItems[6]!=='empty'){
        this.winMessage = `${this.arrayItems[6]} won`
      }
  }

  reloadGame= () =>{
    this.winMessage = '';
    this.arrayItems = new Array(9).fill('empty');
    this.isCross=false;
  }

}

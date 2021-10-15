import { DatePipe } from '@angular/common';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Citation } from '../citation';


@Component({
  selector: 'app-cite',
  templateUrl: './cite.component.html',
  styleUrls: ['./cite.component.css']
})
export class CiteComponent implements OnInit {

      id!:number | '';
      citeName!: string | '';
      citeEmail!: string | '';
      citeMessage!: string | '';
      newCitation: any;
      upVote!:number | '';
      downVote!:number | '';
      datePosted!: Date | '';
      currentVote!:number;
      newVote!:number;
      counter!:number;

      messages = [
        new Citation(0,'Caleb', 'caleb@gmail.com', '“It is in the little moments that we live the longest. Everything else is existence.”',0,0,new Date()),
        new Citation(0,'Taleeban', 'taleeban@gmail.com', '"The longest path is always the one you walk with fear!"',0,0,new Date())
        
      ];
      

  submitMessage() {
    this.newCitation = new Citation(this.messages.length,this.citeName,this.citeEmail,this.citeMessage,0,0,new Date());
    this.messages.push(this.newCitation);

  }
  delete(x:Citation) {
    this.messages=this.messages.filter(item=>item !== x);
  }
  upvote(x:Citation) {
    x.upVote+=1;
  }

  downvote(x:Citation) {
    x.downVote+=1;
  }

  highestVotes(){
    this.currentVote = 0
    this.newVote = 0

    for(this.counter=0 ; this.counter < this.messages.length; this.counter++) {
      this.newVote = this.messages[this.counter].upVote;
      if(this.newVote > this.currentVote){this.currentVote = this.newVote}
    }
    return  this.currentVote
  }

  constructor() { }

  ngOnInit(): void {
  }

}
function deleted(deleted: any) {
  throw new Error('Function not implemented.');
}

function newDate(arg0: number, arg1: number, arg2: number): DateConstructor {
  throw new Error('Function not implemented.');
}


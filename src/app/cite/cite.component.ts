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

      messages = [
        new Citation(0,'Caleb', 'caleb@gmail.com', '“It is in the little moments that we live the longest. Everything else is existence.”',0),
        new Citation(0,'Taleeban', 'taleeban@gmail.com', 'Hi there such amaizing quotes',0)
        
      ];

  submitMessage() {
    this.newCitation = new Citation(this.messages.length,this.citeName,this.citeEmail,this.citeMessage,0);
    this.messages.push(this.newCitation);

  }
  delete(x:Citation) {
    this.messages=this.messages.filter(item=>item !== x);
  }
  upvote(x:Citation) {
    x.upVote+=1;
  }

  downvote(x:Citation) {
    x.upVote-=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
function deleted(deleted: any) {
  throw new Error('Function not implemented.');
}


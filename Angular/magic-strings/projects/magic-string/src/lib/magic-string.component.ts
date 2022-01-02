import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'spk-magic-string',
  template: `
<input type='text' (keydown.enter)='markText($event.target)'>
<div #cotent [hidden]="true">
    <ng-content></ng-content>
</div>
<div [innerHTML]="controllercontent"></div>
  `,
  styles: [` .mark{background-color:yellow}`
  ],
  encapsulation: ViewEncapsulation.None
})
export class MagicStringComponent implements OnInit {

  @ViewChild('cotent', { static: true })
  content1!: ElementRef;
  originalContent!: string;
  controllercontent!: string;


  ngOnInit(): void {

    this.originalContent = this.content1.nativeElement.textContent;
    this.controllercontent = this.originalContent;
    console.log(this.controllercontent);
  }

  markText(target: any) {
    var val = target.value;
    this.controllercontent = this.originalContent;
    this.controllercontent = this.originalContent.replace(new RegExp(val, 'g'),
    `<span class="mark">${val}</span>`)
    console.log(val);
  }

}

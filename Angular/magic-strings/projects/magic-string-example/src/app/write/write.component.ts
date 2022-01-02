import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTutorial(name: string, url: string) {
    this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}))
  }

  ngOnInit(): void {

  }

}

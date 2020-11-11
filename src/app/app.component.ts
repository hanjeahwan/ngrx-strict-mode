import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFeatureHome } from './store/scoreboard.selector';

@Component({
  selector: 'nz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-strict-mode';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectFeatureHome).subscribe(console.log);
  }
}

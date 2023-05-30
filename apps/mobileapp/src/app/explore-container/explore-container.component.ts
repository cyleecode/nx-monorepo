import { Component, OnInit, Input, signal, computed } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import _ from 'lodash';
import { lastValueFrom, Observable, withLatestFrom } from 'rxjs';
import { Movement } from '../state/movement-controller/action';
import { MovementState } from '../state/movement-controller/state';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss']
})
export class ExploreContainerComponent implements OnInit {
  @Select(MovementState.getMovement) getMovement$: Observable<any>;
  constructor(private store: Store) {}

  ngOnInit() {}

  moveUp() {
    this.store.dispatch(new Movement.Up());
  }

  moveLeft() {
    this.store.dispatch(new Movement.Left());
  }
  moveRight() {
    this.store.dispatch(new Movement.Right());
  }
  moveDown() {
    this.store.dispatch(new Movement.Down());
  }
}

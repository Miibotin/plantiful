import { Component, OnInit, Input } from '@angular/core';
import { Item } from './activity.service';
import { attachViewState } from '../../../view-state-utils';
import { ItemViewState } from '../../model/itemviewstate';

const ItemViewStateFactory = () => { return { selected: false } };

@Component({
  selector: 'app-item',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  @attachViewState<ItemViewState>("item", ItemViewStateFactory)
  vs: ItemViewState;

  @Input() item: Item;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-panel-client',
  templateUrl: './tab-panel-client.component.html',
  styleUrls: ['./tab-panel-client.component.css']
})
export class TabPanelClientComponent {
  @Input() showTapshowTabClient: boolean;

}

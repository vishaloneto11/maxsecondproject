import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('spcreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpcreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName: string = ' ';
  newServercontent: string = ' ';

  onAddServer() {

    this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServercontent })
  }
  onAddBlueprint() {
    this.bluePrintCreated.emit({ serverName: this.newServerName, serverContent: this.newServercontent })
  }
}

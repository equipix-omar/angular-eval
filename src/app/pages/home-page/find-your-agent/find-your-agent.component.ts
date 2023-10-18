import {Component, OnInit} from '@angular/core';
import {agent} from "../home2/home2.model";
import {agentData} from '../home2/data';

@Component({
  selector: 'app-find-your-agent',
  templateUrl: './find-your-agent.component.html',
  styleUrls: ['./find-your-agent.component.scss']
})
export class FindYourAgentComponent implements OnInit {

  agentData!: agent[];

  constructor() {
  }

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData() {
    this.agentData = agentData;
  }

}

import { Component, ViewChild } from '@angular/core';
import { BarGraphComponent } from 'src/app/Graphs/bar-graph/bar-graph.component';
import { EscalatedGraphComponent } from 'src/app/Graphs/escalated-graph/escalated-graph.component';
import { InProgressComponent } from 'src/app/Graphs/in-progress/in-progress.component';
import { UnresolvedComponent } from 'src/app/Graphs/unresolved/unresolved.component';

@Component({
  selector: 'app-company-admin-dashboard',
  templateUrl: './company-admin-dashboard.component.html',
  styleUrls: ['./company-admin-dashboard.component.css']
})
export class CompanyAdminDashboardComponent {
  
 
  
  applyFilters() {
    //Filter Logic
  }
  @ViewChild(BarGraphComponent, { static: false }) private barGraphComponent!: BarGraphComponent;
  @ViewChild(InProgressComponent, { static: false }) private inProgressComponent!: InProgressComponent;
  @ViewChild(UnresolvedComponent,{static:false}) private unresolvedComponent!:UnresolvedComponent ;
   @ViewChild(EscalatedGraphComponent,{static:false}) private EscalatedGraphComponent!:EscalatedGraphComponent 
  constructor() { }

  triggerDownloadCSV(): void {
    if (this.inProgressComponent) {
      this.inProgressComponent.downloadCSV();
    } else if (this.barGraphComponent) {
      this.barGraphComponent.downloadCSV();
    } else if (this.EscalatedGraphComponent){
      this.EscalatedGraphComponent.downloadCSV();
    }else if (this.unresolvedComponent){
      this.unresolvedComponent.downloadCSV();
    }else {
      console.error('Neither InProgressComponent nor BarGraphComponent is available');
    }
  }
  
}
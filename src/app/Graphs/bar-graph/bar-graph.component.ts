import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements AfterViewInit {

  @ViewChild('barCanvas', { static: true }) private barCanvas!: ElementRef;
  companyId: string = 'e155ac6a-34e8-4ee8-a551-00565a9a420d';  // Adjust the companyId as needed
  updatedAtDates: string[] = this.generateUpdatedAtDates();
  ticketData: number[] = [];

  private apiUrl = 'http://localhost:8080/api/ticket/tickets/resolved';  // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.fetchDataAndCreateChart();
  }

  generateUpdatedAtDates(): string[] {
    const currentYear = new Date().getFullYear();
    const baseYear = 2024; // Change this base year as needed
    const yearOffset = currentYear - baseYear;
    const months = ['01', '02', '03', '04', '05', '06', '07','08','09','10','11','12'];
    
    return months.map(month => `${baseYear + yearOffset}-${month}-01`);
  }

  getTotalClosedTicketsForMonth(companyId: string, updatedAt: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}?companyId=${companyId}&updatedAt=${updatedAt}`);
  }

  fetchDataAndCreateChart(): void {
    const requests = this.updatedAtDates.map(date =>
      this.getTotalClosedTicketsForMonth(this.companyId, date).toPromise()
        .catch(() => 0) // If request fails, return 0 for that month
    );

    Promise.all(requests).then(data => {
      this.ticketData = data.map(item => item as number);
      console.log('Fetched data:', this.ticketData); // Debugging line
      this.createBarGraph();
    }).catch(error => {
      console.error('Error fetching ticket data', error);
    });
  }

  createBarGraph(): void {
    const barCanvas = this.barCanvas.nativeElement;
    const ctx = barCanvas.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [{
            label: 'Tickets',
            data: this.ticketData,
            backgroundColor: '#B20000',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 0,
            barThickness: 15
          }]
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              beginAtZero: false,
              min: 0,
              max: 10,
              ticks: {
                stepSize: 2,
              }
            }
          }
        }
      });
    } else {
      console.error('Failed to get 2D context');
    }
  }
}

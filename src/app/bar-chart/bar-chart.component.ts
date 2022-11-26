import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public chart: any;
  hJan: number = 0;
  hFev: number = 0;
  hMar: number = 0;
  hAbr: number = 0;
  hMai: number = 0;
  hJun: number = 0;
  hJul: number = 0;
  hAgo: number = 0;
  hSet: number = 0;
  hOut: number = 0;
  hNov: number = 0;
  hDez: number = 0;
  mJan: number = 0;
  mFev: number = 0;
  mMar: number = 0;
  mAbr: number = 0;
  mMai: number = 0;
  mJun: number = 0;
  mJul: number = 0;
  mAgo: number = 0;
  mSet: number = 0;
  mOut: number = 0;
  mNov: number = 0;
  mDez: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }

  gerarGrafico() {
    this.chart.destroy()
    this.createChart()
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril',
          'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
          {
            label: "Homem",
            data: [this.hJan, this.hFev, this.hMar, this.hAbr, this.hMai,
            this.hJun, this.hJul, this.hAgo, this.hSet, this.hOut, this.hNov, this.hDez],
            backgroundColor: '#054F77'
          },
          {
            label: "Mulher",
            data: [this.mJan, this.mFev, this.mMar, this.mAbr, this.mMai,
            this.mJun, this.mJul, this.mAgo, this.mSet, this.mOut, this.mNov, this.mDez],
            backgroundColor: 'pink'
          }
        ]
      },
      options: {
        aspectRatio: 5.0
      }
    });
  }
}

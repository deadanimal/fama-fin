import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public clicked: boolean = true;
  public clicked1: boolean = false;

  public chart: am4charts.XYChart
  public chart1: am4charts.ChordDiagram

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.initChart()
      this.initChart1()
    })
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    let data = [];
    let value = 50;
    for (var i = 0; i < 300; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: date, value: value });
    }

    chart.data = data;

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}"

    series.tooltip.pointerOrientation = "vertical";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series;
    chart.cursor.xAxis = dateAxis;

    //chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarX = new am4core.Scrollbar();
    this.chart = chart
  }

  initChart1() {
    let chart = am4core.create("chartdiv1", am4charts.ChordDiagram);
    chart.hiddenState.properties.opacity = 0;

    chart.data = [
        { from: "A", to: "D", value: 10 },
        { from: "B", to: "D", value: 8 },
        { from: "B", to: "E", value: 4 },
        { from: "B", to: "C", value: 2 },
        { from: "C", to: "E", value: 14 },
        { from: "E", to: "D", value: 8 },
        { from: "C", to: "A", value: 4 },
        { from: "G", to: "A", value: 7 },
        { from: "D", to: "B", value: 1 }
    ];

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";

    // make nodes draggable
    let nodeTemplate = chart.nodes.template;
    nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer

    this.chart1 = chart
  }

}

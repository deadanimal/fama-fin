import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.initChart()
      // this.initChart1()
    })
  }

  initChart() {
    let chart = am4core.create("chartdiv", am4charts.SlicedChart);
    chart.paddingBottom = 30;
    chart.data = [{
      "name": "Goods Received",
      "value": 600
    }, {
      "name": "Goods Issue",
      "value": 300
    }, {
      "name": "Transfers",
      "value": 200
    }, {
      "name": "Stock Issues (Sales)",
      "value": 180
    }, {
      "name": "Customer Returns",
      "value": 50
    }];

    let series = chart.series.push(new am4charts.PyramidSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "name";
    series.alignLabels = true;
    series.valueIs = "height";

  }

}

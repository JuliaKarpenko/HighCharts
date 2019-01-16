"use strict";

var pointStart = Date.UTC(2014, 0, 1);
Highcharts.chart('container', {
  title: {
    text: 'Schedule visiting children in kindergarten in 2008-2018'
  },
  subtitle: {
    text: 'Kindergarten 370'
  },
  yAxis: {
    title: {
      text: 'Amount of children'
    }
  },
  xAxis: {
    title: {
      text: 'Months'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2008
    }
  },
  tooltip: {
    animation: true,
    backgroundColor: '#ffff',
    borderRadius: 3,
    shadow: true
  },
  series: [{
    name: 'Group 1',
    data: [10, 10, 11, 10, 9, 8, 8, 9, 9, 8, 8, 9]
  }, {
    name: 'Group 2',
    data: [5, 4, 7, 5, 6, 6, 7, 4, 10, 10, 11, 10]
  }, {
    name: 'Group 3',
    data: [11, 12, 15, 10, 9, 9, 10, 10, 11, 10, 10, 15]
  }, {
    name: 'Group 4',
    data: [9, 9, 10, 10, 10, 10, 11, 10, 11, 11, 8, 10]
  }, {
    name: 'Group 5',
    data: [16, 10, 10, 11, 10, 17, 15, 15, 16, 17, 17, 18]
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 200
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }
});
google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart);
 function drawChart() {
  var data = google.visualization.arrayToDataTable([
          ['Year', 'Sembuh', 'Kasus baru'],
          ['17 Sep 2021',  8013, 9053],
          ['20 Okt 2021',  1170, 2204],
          ['29 Nov 2021',  660,  849],
          ['25 Des 2021',  420,  540]
  ]);

 var options = {
  title: 'Data Covid Di Indonesia',
  hAxis: {title: 'Tahun',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('data_covid_19'));
        chart.draw(data, options);
}

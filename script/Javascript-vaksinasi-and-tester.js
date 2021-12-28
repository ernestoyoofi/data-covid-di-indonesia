google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart);
 function drawChart() {
  var data = google.visualization.arrayToDataTable([
          ['Year', 'Vaksinasi', 'Test Swab'],
          ['14 Agu 2021',  1067329,  114802], 
          ['17 Sep 2021',  93810200, 167464],
          ['20 Okt 2021',  107095320,160140],
          ['29 Nov 2021',  138560021,186164],
          ['25 Des 2021',  156182019,187177]
  ]);

 var options = {
  title: 'Data Vaksinasi Dan Test Swab',
  hAxis: {title: 'Tahun',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('data_vaksinasi'));
        chart.draw(data, options);
}

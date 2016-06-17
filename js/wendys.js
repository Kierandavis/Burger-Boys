$(document).ready(function(){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);
});


function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Category','Percentage',{role: 'style'},{role:'annotation'}],
        ['Tenderness',42,'color: #D0E4F2', '95%'],
        ['Flavor', 40, 'color: #85A5CC', '90%'],
        ['Appearance', 55, 'color: #4A6491', '87%'],
        ['Service', 60, 'color: #30395C ', '80%'],
        ['Price', 100, 'color: #1A1F2B', '60%'],
        ['Ambiance', 50, 'color: black', '93%'],
      ]);

      var options = {
        title: 'Score Breakdown',
        chartArea: {height: '75%'}, 
        hAxis: {
          title: 'Rating',
          minValue: 0
        },
        vAxis: {
          title: 'Category'
        },
        legend: 'none'
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);

    }
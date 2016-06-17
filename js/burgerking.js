$(document).ready(function(){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);
});


function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Category','Percentage',{role: 'style'},{role:'annotation'}],
        ['Tenderness',44,'color: #D0E4F2', '44%'],
        ['Flavor', 48, 'color: #85A5CC', '48%'],
        ['Appearance', 45, 'color: #4A6491', '45%'],
        ['Service', 53, 'color: #30395C ', '53%'],
        ['Price', 100, 'color: #1A1F2B', '100%'],
        ['Ambiance', 32, 'color: black', '32%'],
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
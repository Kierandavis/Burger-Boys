$(document).ready(function(){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);
});


function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Category','Percentage',{role: 'style'},{role:'annotation'}],
        ['Tenderness',63,'color: #D0E4F2', '63%'],
        ['Flavor', 58, 'color: #85A5CC', '58%'],
        ['Appearance', 40, 'color: #4A6491', '40%'],
        ['Service', 75, 'color: #30395C ', '75%'],
        ['Price', 100, 'color: #1A1F2B', '100%'],
        ['Ambiance', 60, 'color: black', '60%'],
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
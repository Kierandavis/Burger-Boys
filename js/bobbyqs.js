$(document).ready(function(){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);
});


function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Category','Percentage',{role: 'style'},{role:'annotation'}],
        ['Tenderness',80,'color: #D0E4F2', '80%'],
        ['Flavor', 85, 'color: #85A5CC', '85%'],
        ['Appearance', 80, 'color: #4A6491', '80%'],
        ['Service', 100, 'color: #30395C ', '100%'],
        ['Price', 80, 'color: #1A1F2B', '80%'],
        ['Ambiance', 93, 'color: black', '93%'],
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
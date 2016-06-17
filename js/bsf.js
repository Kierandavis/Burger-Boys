$(document).ready(function(){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);
});


function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Category','Percentage',{role: 'style'},{role:'annotation'}],
        ['Tenderness',100,'color: #D0E4F2', '100%'],
        ['Flavor', 95, 'color: #85A5CC', '95%'],
        ['Appearance', 93, 'color: #4A6491', '93%'],
        ['Service', 80, 'color: #30395C ', '80%'],
        ['Price', 95, 'color: #1A1F2B', '95%'],
        ['Ambiance', 80, 'color: black', '80%'],
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
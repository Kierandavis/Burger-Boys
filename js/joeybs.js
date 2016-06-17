$(document).ready(function(){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);
});


function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Category','Percentage',{role: 'style'},{role:'annotation'}],
        ['Tenderness',85,'color: #D0E4F2', '85%'],
        ['Flavor', 73, 'color: #85A5CC', '73%'],
        ['Appearance', 87, 'color: #4A6491', '87%'],
        ['Service', 100, 'color: #30395C ', '100%'],
        ['Price', 88, 'color: #1A1F2B', '88%'],
        ['Ambiance', 83, 'color: black', '83%'],
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
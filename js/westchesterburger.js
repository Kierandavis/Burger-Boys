$(document).ready(function(){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);
});


function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Category','Percentage',{role: 'style'},{role:'annotation'}],
        ['Tenderness',90,'color: #D0E4F2', '90%'],
        ['Flavor', 80, 'color: #85A5CC', '80%'],
        ['Appearance', 83, 'color: #4A6491', '83%'],
        ['Service', 50, 'color: #30395C ', '50%'],
        ['Price', 75, 'color: #1A1F2B', '75%'],
        ['Ambiance', 77, 'color: black', '77%'],
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
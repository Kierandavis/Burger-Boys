$(document).ready(function(){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);
});


function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Category','Percentage',{role: 'style'},{role:'annotation'}],
        ['Tenderness',70,'color: #D0E4F2', '70%'],
        ['Flavor', 85, 'color: #85A5CC', '85%'],
        ['Appearance', 80, 'color: #4A6491', '80%'],
        ['Service', 83, 'color: #30395C ', '83%'],
        ['Price', 85, 'color: #1A1F2B', '85%'],
        ['Ambiance', 86, 'color: black', '86%'],
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
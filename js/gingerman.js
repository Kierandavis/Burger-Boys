$(document).ready(function(){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);
});


function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Category','Percentage',{role: 'style'},{role:'annotation'}],
        ['Tenderness',95,'color: #D0E4F2', '95%'],
        ['Flavor', 90, 'color: #85A5CC', '90%'],
        ['Appearance', 87, 'color: #4A6491', '87%'],
        ['Service', 80, 'color: #30395C ', '80%'],
        ['Price', 60, 'color: #1A1F2B', '60%'],
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
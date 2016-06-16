$(document).ready(function(){
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawBasic);
});


function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Category','Percentage',{role: 'style'},{role:'annotation'}],
        ['Tenderness',90,'color: #D0E4F2', '90%'],
        ['Flavor', 85, 'color: #85A5CC', '85%'],
        ['Appearance', 80, 'color: #4A6491', '80%'],
        ['Ambience', 66, 'color: black', '66%']
        ['Service', 50, 'color: #30395C ', '50%'],
        ['Price', 75, 'color: #1A1F2B', '75%'],
      ]);

      var options = {
        title: 'Score Breakdown',
        chartArea: {height: '70%'}, 
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
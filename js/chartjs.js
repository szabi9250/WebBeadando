  const table = document.getElementById('tablazat');
  const labels = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'];
  const hetek = ['1','2','3','4','5'];
  const szinek = ['#36A2EB', '#9BD0F5', '#FF6384', '#FFB1C1', '#07CB13']

  const data = [];
  for (let row = 0; row < table.rows.length; row++) {
    let rowData = [];
    for (let cell = 1; cell < table.rows[row].cells.length; cell++) {
      rowData.push(parseInt(table.rows[row].cells[cell].innerText));
    }
    data.push(rowData);
  }

  const chartData = {
    labels: hetek,
    datasets: data.map((napok,i) => ({
      label: labels[i],
      data: napok,
      fill: false,
      borderColor: szinek,
      tension: 0.1
    }))
  };

  const config = {
    type: 'line',
    data: chartData,
  };	

  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, config);
  
  function toggleDay(nap) {
	document.getElementById('myChart').style.display = 'block';
    const dataset = myChart.data.datasets[nap];
	dataset.hidden = !dataset.hidden;
    myChart.update();
  }
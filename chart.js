axios
  .get("https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP031/110")
  .then(function (res) {

    const data = res.data.responseData;
    console.log(data);

    // chart 1

    const labelsCity = data.filter(
        function (item) {
            return item.death_total > 2500
        }).map(function (item) {
        return item.site_id
    });

    const labelsDeathTotal = data.filter(
        function (item) {
            return item.death_total > 2500
        }).map(function (item) {
        return item.death_total
    });
    

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: labelsCity,
    datasets: [
      {
        data: labelsDeathTotal,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {

        title: {
            display: true,
            text: '110年度死亡人數超過2500人之鄉鎮市區'
        }
    }

  },
});
//chart 2

const labelsCity2 = data.filter(
    function (item) {
        return item.death_total < 20
    }).map(function (item) {
    return item.site_id
});

const labelsDeathTotal2 = data.filter(
    function (item) {
        return item.death_total < 20
    }).map(function (item) {
    return item.death_total
});

const ctx2 = document.getElementById("myChart2");
const myChart2 = new Chart(ctx2, {
  type: "pie",
  data: {
    labels: labelsCity2,
    datasets: [
      {
        data: labelsDeathTotal2,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {

        title: {
            display: true,
            text: '110年度死亡人數小於20人之鄉鎮市區'
        }
    }
  },
});

//chart 3
const labelsCity3 = data.filter(
    function (item) {
        return item.death_total > 2500
    }).map(function (item) {
    return item.site_id
});

const labelsDeathTotalF = data.filter(
    function (item) {
        return item.death_total > 2500
    }).map(function (item) {
    return item.death_f
});

const labelsDeathTotalM = data.filter(
    function (item) {
        return item.death_total > 2500
    }).map(function (item) {
    return item.death_m
});

const ctx3 = document.getElementById("myChart3");
const myChart3 = new Chart(ctx3, {
  type: "bar",
  data: {
    labels: labelsCity3,
    datasets: [{
        label: 'Female',
        data: labelsDeathTotalF,
        backgroundColor:
            [
                'rgba(255, 99, 132, 0.2)',
            ],
        borderColor:
            [
                'rgb(255, 99, 132)',
            ],
        borderWidth: 1,
    },{
        label: 'Male',
        data: labelsDeathTotalM,
        backgroundColor:
            [
                'rgba(130, 99, 132, 0.2)',
            ],
        borderColor:
            [
                'rgb(130, 99, 132)',
            ],
        borderWidth: 1,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: { 
            stacked: true
        },
        y: {
            stacked: true,
            beginAtZero: true
        }
    },
    plugins: {

        title: {
            display: true,
            text: '110年度死亡人數超過2500人之鄉鎮市區(性別區分)'
        }
    }
  },
});
//chart 4
const labelsCity4 = data.filter(
    function (item) {
        return item.death_age_000_f >= 5
    }).map(function (item) {
    return item.site_id
});

const labelsDeathAgeZero = data.filter(
    function (item) {
        return item.death_age_000_f >= 5
    }).map(function (item) {
    return item.death_age_000_f
});
console.log(labelsDeathAgeZero)

const ctx4 = document.getElementById("myChart4");
const myChart4 = new Chart(ctx4, {
  type: "line",
  data: {
    labels: labelsCity4,
    datasets: [
      {
        label: '未滿一歲死亡女性人數',
        data: labelsDeathAgeZero,
        backgroundColor: [
            'rgba(78, 85, 234, 0.8)',

        ],
        borderColor: [
            'rgba(78, 85, 234)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
        point: {
            radius: 10,
            pointStyle: 'star',
            rotation: 30,
            hoverRadius: 5,
        },
    },
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {

        title: {
            display: true,
            text: '110年度未滿一歲女性死亡人數超過5人之鄉鎮市區'
        }
    }
  },
});







  })
  .catch(function (error) {
    console.log(error);
  });


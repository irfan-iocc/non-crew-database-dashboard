// Employee Chart Start
// Setup
const employeeChartData = {
  labels: ["Dispatch Center", "FLOE Center", "OAC", "OPS. P&C Center", "Quality & Std", "System Adm."],
  datasets: [
    {
      label: "Employee",
      data: [150, 50, 100, 90, 135, 65],
      backgroundColor: ["#dc3545", "#ffc107", "#20c997", "#007bff", "#6610f2", "#e83e8c"],
      hoverOffset: 4,
    },
  ],
};

//   Config
const employeeChartconfig = {
  type: "bar",

  data: employeeChartData,

  options: {
    indexAxis: "y",
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  },
};

//
var employeeChart = new Chart(document.getElementsByClassName("employeeChart"), employeeChartconfig);
// Employee Chart End

// YS Chart Start
// Setup
const ysData = {
  labels: ["<1", "1-2", "3-5", "≥5"],
  datasets: [
    {
      data: [50, 100, 65],
      backgroundColor: ["#000000", "#1A4D2E", "#FF9F29"],
      hoverOffset: 4,
    },
  ],
};

//   Config
const ysConfig = {
  type: "doughnut",

  data: ysData,
};

//
const ysChart = new Chart(document.getElementById("ysChart"), ysConfig);
// YS Chart End

// Chart Edu start
const labelsEdu = ["SMA", "D1-D3", "D4/S1", "S2"];

const dataEdu = {
  labels: labelsEdu,
  datasets: [
    {
      label: "Education",
      backgroundColor: ["#FFC54D", "#BD4291", "#F94C66", "#53BF9D"],
      data: [45, 35, 40, 5],
    },
  ],
};

const configEdu = {
  type: "doughnut",
  data: dataEdu,
  options: {},
};

const eduChart = new Chart(document.getElementById("eduChart"), configEdu);
// chart Edu end

// Chart Contract start
const labelsCon = ["Expired", "1 Month to Exp"];

const dataCon = {
  labels: labelsCon,
  datasets: [
    {
      label: "Contract",
      backgroundColor: ["#FCE2DB", "#B93160"],
      data: [45, 35],
    },
  ],
};

const configCon = {
  type: "pie",
  data: dataCon,
  options: {},
};

const conChart = new Chart(document.getElementById("conChart"), configCon);
// chart Contract end

// Chart Age Group start
const labelsAg = ["≤25", "26-35", "36-45", "46-54", "≥54"];

const dataAg = {
  labels: labelsAg,
  datasets: [
    {
      label: "Age Group",
      backgroundColor: ["#231955", "#1F4690", "#E8AA42", "#FFE5B4"],
      data: [45, 35, 40, 5, 4],
    },
  ],
};

const configAg = {
  type: "bar",
  data: dataAg,
  options: {
    indexAxis: "y",
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  },
};

const agChart = new Chart(document.getElementById("agChart"), configAg);
// chart Age Group end

// Turnover start
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Employees Left",
      backgroundColor: "#F24C4C",
      borderColor: "#F24C4C",
      data: [0, 10, 5, 2, 20, 30, 25, 12, 10, 45, 35, 40, 10, 5, 2, 20, 30, 25, 12, 10, 45, 35, 40, 10, 5, 2, 20, 30, 25, 12, 10, 45, 35, 40],
    },
    {
      label: "New Hire",
      backgroundColor: "#293462",
      borderColor: "#293462",
      data: [25, 10, 9, 6, 7, 9, 3, 4, 0, 2, 3, 10, 25, 12, 10, 45, 35, 40, 10, 25, 12, 10, 45, 35, 40, 10, 25, 12, 10, 45, 35, 40, 10, 25],
    },
    {
      label: "Mutation",
      backgroundColor: "#5FD068",
      borderColor: "#5FD068",
      data: [45, 35, 40, 10, 25, 12, 10, 45, 35, 40, 10, 25, 12, 10, 45, 35, 40, 10, 25, 25, 10, 9, 6, 7, 9, 3, 4, 0, 2, 3, 10, 25, 12, 10],
    },
  ],
};

const totalDuration = 10000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) => (ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(["y"], true).y);
const animation = {
  x: {
    type: "number",
    easing: "linear",
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== "data" || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * delayBetweenPoints;
    },
  },
  y: {
    type: "number",
    easing: "linear",
    duration: delayBetweenPoints,
    from: previousY,
    delay(ctx) {
      if (ctx.type !== "data" || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * delayBetweenPoints;
    },
  },
};

const config = {
  type: "line",
  data: data,
  options: {},
};

// const myChart = new Chart(document.getElementById("myChart"), config);
var myChart = new Chart(document.getElementsByClassName("myChart"), config);
// var myChart = document.getElementsByClassName("myChart");
// console.log(myChart[0]);

$('#tgr1').on('click', function(){
  myChart.destroy();
  $('#canvasTest').html('');
  console.log('ok');
  var elm = $('.myChart').clone();
  // var elm = document.getElementsByClassName("myChart");
  var prt = elm.parent();
  console.log(elm[0]);
  $('#canvasTest').html(elm);
  myChart = new Chart(document.getElementsByClassName("myChart"), config);

})
// Turnover end

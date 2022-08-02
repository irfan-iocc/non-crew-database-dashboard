// Employee Chart Start
// Setup
const employeeChartData = {
  labels: ["DISPATCH CENTER", "FLIGHT OPERATION ENGINEERING CENTER", "FLOE CENTER", "OPS. ADMINISTRATION CENTER", "OPS. PLANNING & CONTROL CENTER", "QUALITY & STANDARD", "SYSTEM ADMINISTRATOR"],
  datasets: [
    {
      label: "Chart",
      data: [150, 50, 100, 90, 135, 65, 10],
      backgroundColor: ["#dc3545", "#ffc107", "#20c997", "#007bff", "#6610f2", "#e83e8c", "#6c757d"],
      hoverOffset: 4,
    },
  ],
};

//   Config
const employeeChartconfig = {
  type: "bar",

  data: employeeChartData,
};

//
const employeeChart = new Chart(document.getElementById("employeeChart"), employeeChartconfig);
// Employee Chart End

// Chart Activation start
const labelsAct = ["Active", "Inactive"];

const dataAct = {
  labels: labelsAct,
  datasets: [
    {
      label: "Activation",
      backgroundColor: ["#C70A80", "#FBCB0A"],
      data: [45, 23],
    },
  ],
};

const configAct = {
  type: "doughnut",
  data: dataAct,
  options: {},
};

const actChart = new Chart(document.getElementById("actChart"), configAct);
// chart Activation end

// Chart Gen start
const labelsGen = ["Male", "Female"];

const dataGen = {
  labels: labelsGen,
  datasets: [
    {
      label: "Employees Education",
      backgroundColor: ["#16003B", "#F73D93"],
      data: [45, 35],
    },
  ],
};

const configGen = {
  type: "doughnut",
  data: dataGen,
  options: {},
};

const genChart = new Chart(document.getElementById("genChart"), configGen);
// chart Gen end

// Chart Edu start
const labelsEdu = ["SMA", "D3", "D4/S1", "S2"];

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
  type: "bar",
  data: dataEdu,
  options: {},
};

const eduChart = new Chart(document.getElementById("eduChart"), configEdu);
// chart Edu end

// Chart YS start
const labelsYs = ["0-2 Years", "2-5 Years", ">5 Years"];

const dataYs = {
  labels: labelsYs,
  datasets: [
    {
      label: "Year of Services",
      backgroundColor: ["#000000", "#1A4D2E", "#FF9F29"],
      data: [45, 35, 40],
    },
  ],
};

const configYs = {
  type: "bar",
  data: dataYs,
  options: {},
};

const ysChart = new Chart(document.getElementById("ysChart"), configYs);
// chart YS end

// Chart Contract start
const labelsCon = ["No Data", "Expired", "1 Month to Expire", "3 Months to Expire", "Valid"];

const dataCon = {
  labels: labelsCon,
  datasets: [
    {
      label: "Year of Services",
      backgroundColor: ["#FCE2DB", "#B93160", "#B270A2", "#7A4495"],
      data: [45, 35, 40, 5],
    },
  ],
};

const configCon = {
  type: "doughnut",
  data: dataCon,
  options: {},
};

const conChart = new Chart(document.getElementById("conChart"), configCon);
// chart Contract end

// Chart Age Group start
const labelsAg = ["≤25 Years", "35-35 Years", "35-45 Years", "45-54 Years"];

const dataAg = {
  labels: labelsAg,
  datasets: [
    {
      label: "Age Group",
      backgroundColor: ["#231955", "#1F4690", "#E8AA42", "#FFE5B4"],
      data: [45, 35, 40, 5],
    },
  ],
};

const configAg = {
  type: "doughnut",
  data: dataAg,
  options: {},
};

const agChart = new Chart(document.getElementById("agChart"), configAg);
// chart Age Group end

// Turnover start
const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Employees Left",
      backgroundColor: "#F24C4C",
      borderColor: "#F24C4C",
      data: [0, 10, 5, 2, 20, 30, 25, 12, 10, 45, 35, 40],
    },
    {
      label: "New Hire",
      backgroundColor: "#293462",
      borderColor: "#293462",
      data: [25, 10, 9, 6, 7, 9, 3, 4, 0, 2, 3, 10],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const myChart = new Chart(document.getElementById("myChart"), config);
// Turnover end

//

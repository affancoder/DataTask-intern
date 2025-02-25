// Sample data (replace with your actual data from the CSV)
const companies = [
  { name: "Nifty 50", data: [21932.2, 22180.7, 21883.3, 22096.75] },
  { name: "Nifty Next 50", data: [58987.1, 59326.25, 58644.3, 59188.9] },
  { name: "Nifty 100", data: [22476.7, 22709.35, 22414.5, 22633.8] },
  { name: "Nifty 200", data: [12084.35, 12204.85, 12050.5, 12168.75] },
  { name: "Nifty 500", data: [19855.0, 20048.6, 19806.7, 19994.6] },
];

// Dynamically add companies to the list
const companyList = document.getElementById("companies");
companies.forEach((company, index) => {
  const li = document.createElement("li");
  li.className = "company-item";
  li.textContent = company.name;
  li.addEventListener("click", () => updateChart(company.data, company.name));
  companyList.appendChild(li);
});

// Initialize Chart.js
const ctx = document.getElementById("companyChart").getContext("2d");
let chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Open", "High", "Low", "Close"],
    datasets: [
      {
        label: "Company Data",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  },
});

// Function to update the chart
function updateChart(data, label) {
  chart.data.datasets[0].data = data;
  chart.data.datasets[0].label = label;
  chart.update();
}

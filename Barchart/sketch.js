let data;
let cleanedData = [];
let charts = [];

let backgroundColour;

function preload(){
    data = loadTable('data/data.csv', 'csv', 'header')
}

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    noLoop();
    cleanData();

    backgroundColour = color(240);

    let barChart = {
        data: cleanedData,
        xAxisValue: "Team",
        yAxisValue: "Goals",
        chartHeight: 500,
        chartWidth: 500,
        barWidth: 10,
        margin: 15,
        axisThickness: 4,
        chartPosX: 170,
        chartPosY: 650,
        barColour: "#05ff48",
        axisColour: "#070807",
        barStrokeThickness: 0,
        barStrokeColour: "#fafafa",
        titleText: "Total goals by Premier League Team 2024/25",
        titleXOffset: -30,
        titleYOffset: 50,
        titleWidth: 300,
        titleSize: 20,
        titleColour: "fafafa",
        tickColour: "fafafa",
        tickStrokeWeight: 1,
        tickStrokeLength: 10,
        tickPadding: 10,
        numTicks: 5,
        tickTextColour: "#fafafa",
        tickTextSize: 14,

        labelPadding: 11,
        labelRotation: 60,
        labelTextSize: 12,
        labelColour: "#fafafa"
    };

    charts.push(new BarChart(barChart));
}

function draw(){
    background(backgroundColour);
    barCharts.forEach((barChart) => barChart.render())
}

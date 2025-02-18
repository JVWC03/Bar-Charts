let data;
let cleanedData = [];
let charts = [];
let barChart = {}; // Object to store bar chart properties

function preload(){
    data = loadTable('data/data.csv', 'csv', 'header');
}

function setup(){
    createCanvas(800,800);
    angleMode(DEGREES);
    noLoop();
    cleanData();

    // Fill barChart object with necessary properties
    barChart = {
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
        xAxisLabel: "PL Teams",
        yAxisLabel: "Goals",
        tickColour: "#050505",
        tickStrokeWeight: 3,
        tickStrokeLength: 20,
        tickPadding: 10,
        numTicks: 6,
        tickTextColour: "#105195",
        tickTextSize: 50,
    };

    charts.push(new BarChart(barChart));
}

function draw(){
    background(102, 255, 102);
    charts.forEach(chart => chart.render());
}

function cleanData(){
    for(let i = 0; i < data.rows.length; i++){
        cleanedData.push(data.rows[i].obj);
    }

    for(let i = 0; i < cleanedData.length; i++){
        cleanedData[i].Goals = parseInt(cleanedData[i].Goals);
        cleanedData[i].Shots = parseInt(cleanedData[i].Shots);
        cleanedData[i].Shots_On_Target = parseInt(cleanedData[i].Shots_On_Target);
        cleanedData[i].Possession = parseInt(cleanedData[i].Possession);
        cleanedData[i].Corners = parseInt(cleanedData[i].Corners);
    }
}

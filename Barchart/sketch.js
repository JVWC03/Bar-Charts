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

    //Barchart object
    barChart = {
        data: cleanedData,
        xAxisValue: "Team",
        yAxisValue: "Goals",
        chartHeight: 500,
        chartWidth: 500,
        barWidth: 18,
        margin: 15,
        axisThickness: 3,
        chartPosX: 170,
        chartPosY: 650,
        xAxisLabel: "PL Teams 2024/25",
        yAxisLabel: "Goals By Team",
        titleLabel: "Total Goals Scored By Premier League Teams 2024/25",
        textStrokeWeight: 1,
        numberStrokeWeight: 1.5,
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
    background(204, 0, 204);
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

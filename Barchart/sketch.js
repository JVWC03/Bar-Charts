let data;
let cleanedData = [];
let charts = [];
let barChart = {}; //original barchart object
let horizontalBarChart = {}; //horizontal bar chart object
let stackedBarChart = {}; // stacked bar chart object

function preload(){
    data = loadTable('data/data.csv', 'csv', 'header');
}

function setup(){
    createCanvas(1600,1600);
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

    horizontalBarChart = {
        data: cleanedData,
        xAxisValue: "Goals", 
        yAxisValue: "Team", 
        chartHeight: 500,
        chartWidth: 500,
        barWidth: 18,
        margin: 15,
        axisThickness: 3,
        chartPosX: 170,
        chartPosY: 1500, 
        xAxisLabel: "Goals By Team",
        yAxisLabel: "PL Teams 2024/25",
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
    
    charts.push(new HorizontalBarChart(horizontalBarChart));
    
    stackedBarChart = {
        data: cleanedData,
        xAxisValue: "Team", 
        yAxisValues: ["Possession", "Goals"], 
        chartHeight: 500,
        chartWidth: 500,
        barWidth: 18,
        margin: 15,
        axisThickness: 3,
        chartPosX: 920,
        chartPosY: 650, 
        xAxisLabel: "PL Teams 2024/25",
        yAxisLabel: "Goals and Possession",
        titleLabel: "Premier League Teams Goals and Possession",
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

    charts.push(new StackedBarChart(stackedBarChart));
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

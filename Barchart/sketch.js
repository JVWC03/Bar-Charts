let data;
let cleanedData = []; // array to store data from csv cleaned in cleanData
let charts = []; // array to store created charts using charts.push
let barChart = {}; //original barchart object
let horizontalBarChart = {}; //horizontal bar chart object
let stackedBarChart = {}; // stacked bar chart object
let pieChart = {}; // pie chart object

function preload(){
    //loads in the data from the csv
    data = loadTable('data/data.csv', 'csv', 'header');
}

function setup(){
    //sets canvas to 3000 pixels wide and high
    createCanvas(3000,3000);
    //sets angle mode to degrees
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
        startBar: -1,
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

    //creates an instance of my barchart class and stores it in charts array
    charts.push(new BarChart(barChart));

    barChart2 = {
        data: cleanedData,
        xAxisValue: "Team",
        yAxisValue: "Shots",
        chartHeight: 500,
        chartWidth: 500,
        barWidth: 18,
        margin: 15,
        axisThickness: 3,
        chartPosX: 170,
        chartPosY: 1500,
        startBar: -1,
        xAxisLabel: "PL Teams 2024/25",
        yAxisLabel: "Shots By Team",
        titleLabel: "Total Shots Taken By Premier League Teams 2024/25",
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

    //creates another instance of my barchart class and stores it in charts array
    charts.push(new BarChart(barChart2));

    horizontalBarChart = {
        data: cleanedData,
        xAxisValue: "Goals", 
        yAxisValue: "Team", 
        chartHeight: 500,
        chartWidth: 500,
        barWidth: 18,
        margin: 15,
        axisThickness: 3,
        chartPosX: 180,
        chartPosY: 2200, 
        startBar: 2,
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
    
    //creates an instance of my horizontal barchart class and stores it in charts array
    charts.push(new HorizontalBarChart(horizontalBarChart));

    horizontalBarChart2 = {
        data: cleanedData,
        xAxisValue: "Shots_On_Target", 
        yAxisValue: "Team", 
        chartHeight: 500,
        chartWidth: 500,
        barWidth: 18,
        margin: 15,
        axisThickness: 3,
        chartPosX: 180,
        chartPosY: 2900, 
        startBar: 2,
        xAxisLabel: "Shots On Target By Team",
        yAxisLabel: "PL Teams 2024/25",
        titleLabel: "Total Shots On Target By Premier League Teams 2024/25",
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
    
    //creates another instance of my barchart class and stores it in charts array
    charts.push(new HorizontalBarChart(horizontalBarChart2));
    
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
        startBar: -1,
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

    //creates an instance of my stackesd barchart class and stores it in charts array
    charts.push(new StackedBarChart(stackedBarChart));

    pieChart = {
        data: cleanedData,
        xAxisValue: "Team",  
        yAxisValue: "Corners",  
        titleLabel: "Corners by Premier League Team 2024/25",
        textStrokeWeight: 1,
        chartHeight: 450,
        chartWidth: 450,
        axisThickness: 3,
        chartPosX: 300,  
        chartPosY: 800,
    };

    //creates an instance of my pie chatr class and stores it in charts array
    charts.push(new PieChart(pieChart));
}

function draw(){
    //sets background colour to purple/magenta colour
    background(204, 0, 204);
    //draws each chart on the canvas by calling the render
    charts.forEach(chart => chart.render());
}

//function to clean csv data
function cleanData(){
    //loops through each row in csv and stores in cleanedData array
    for(let i = 0; i < data.rows.length; i++){
        cleanedData.push(data.rows[i].obj);
    }

    //converts strings to integers for each data type goals, shots etc
    for(let i = 0; i < cleanedData.length; i++){
        cleanedData[i].Goals = parseInt(cleanedData[i].Goals);
        cleanedData[i].Shots = parseInt(cleanedData[i].Shots);
        cleanedData[i].Shots_On_Target = parseInt(cleanedData[i].Shots_On_Target);
        cleanedData[i].Possession = parseInt(cleanedData[i].Possession);
        cleanedData[i].Corners = parseInt(cleanedData[i].Corners);
    }
}

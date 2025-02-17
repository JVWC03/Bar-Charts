let data;
let cleanedData = [];
let charts = [];

function preload(){
    data = loadTable('data/data.csv', 'csv', 'header')
}

function setup(){
    createCanvas(800,800);
    angleMode(DEGREES);
    noLoop();
    cleanData();
    charts.push(new BarChart(cleanedData,"Team","Goals",500,500,10,15,4,170,650));
}

function draw(){
    background(250);
    //make chart for goals
    charts.forEach(chart => chart.render())
}

function cleanData(){
    for(let i = 0; i < data.rows.length; i++){
        cleanedData.push(data.rows[i].obj)
    }

    for(let i = 0; i<cleanedData.length; i++){
        cleanedData[i].Goals = parseInt(cleanedData[i].Goals),
        cleanedData[i].Shots = parseInt(cleanedData[i].Shots),
        cleanedData[i].Shots_On_Target = parseInt(cleanedData[i].Shots_On_Target),
        cleanedData[i].Possession = parseInt(cleanedData[i].Possession),
        cleanedData[i].Corners = parseInt(cleanedData[i].Corners)

        console.log(cleanedData);
    }
}
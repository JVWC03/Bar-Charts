let data;
let cleanedData = [];
let charts = [];

function preload(){
    data = loadTable('data/data.csv', 'csv', 'header')
}

function setup(){
    createCanvas(500,500);
    angleMode(DEGREES);
    noLoop();
    cleanData();

}

function draw(){
    background(250);
    
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
    }
}
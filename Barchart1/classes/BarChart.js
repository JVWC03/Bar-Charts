class BarChart {
    constructor (_data, _xAxisValue, _yAxisValue, _chartHeight, _chartWidth, _barWidth, _margin, _axisThickness, _chartPosX, _chartPosY) {
        this.data = _data;
        this.xAxisValue = _xAxisValue;
        this.yAxisValue = _yAxisValue;
        this.chartHeight = _chartHeight;
        this.chartWidth = _chartWidth;
        this.barWidth = _barWidth;
        this.margin = _margin;
        this.axisThickness = _axisThickness;
        this.chartPosX = _chartPosX;
        this.chartPosY = _chartPosY;

        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1)
        this.scaler = this.chartHeight / (max(cleanedData.map(row => row[this.yAxisValue])));

        this.axisColour = color(13,13,11);
        this.barColour = color(255, 128, 0);
        this.axisTextColour = color(0, 0, 0);
    }

    //17th February - get basic chart working: looks good, readable, labels on bottom and side, teams on bottom and numbers on side, colours 
    render(){
    push();
    translate(this.chartPosX,this.chartPosY);
    noFill();
    stroke(this.axisColour);
    strokeWeight(this.axisThickness);
    line(0, 0, 0, -this.chartHeight);
    line(0, 0, this.chartWidth, 0);

    push();
    translate(this.margin, 0);
    for (let i = 0; i < this.data.length; i++) {
        let xPosition = (this.barWidth + this.gap) * i;
        fill(this.barColour)
        noStroke();
        rect(xPosition, 0, this.barWidth, -this.data[i][this.yAxisValue] * this.scaler)
        
        fill(this.axisTextColour);
        noStroke();
        textAlign(LEFT, CENTER);
        textSize(9);

        push();
        translate(xPosition + (this.barWidth / 2), 10);
        rotate(30);
        text(this.data[i][this.xAxisValue], 0, 0);
        pop();
    }
    pop()
    pop()
    }
    
}
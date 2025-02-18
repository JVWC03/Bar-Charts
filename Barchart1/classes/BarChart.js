class BarChart {
    constructor(obj) {
        this.data = obj.data;
        this.xAxisValue = obj.xAxisValue;
        this.yAxisValue = obj.yAxisValue;
        this.chartHeight = obj.chartHeight;
        this.chartWidth = obj.chartWidth;
        this.barWidth = obj.barWidth;
        this.margin = obj.margin;
        this.axisThickness = obj.axisThickness;
        this.chartPosX = obj.chartPosX;
        this.chartPosY = obj.chartPosY;
        this.xAxisLabel = obj.xAxisLabel;
        this.yAxisLabel = obj.yAxisLabel;

        //ticks
        this.tickColour = obj.tickColour;
        this.tickStrokeWeight = obj.tickStrokeWeight;
        this.tickStrokeLength = obj.tickStrokeLength;
        this.tickPadding = obj.tickPadding,
        this.numTicks = obj.numTicks,
        this.tickTextColour = obj.tickTextColour,
        this.tickTextSize = obj.tickTextSize

        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1);
        this.scaler = this.chartHeight / (max(this.data.map(row => row[this.yAxisValue])));

        this.axisColour = color(13,13,11);
        this.barColour = color(255, 128, 0);
        this.axisTextColour = color(0, 0, 0);
    }

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
            fill(this.barColour);
            noStroke();
            rect(xPosition, 0, this.barWidth, -this.data[i][this.yAxisValue] * this.scaler);

            fill(this.axisTextColour);
            noStroke();
            textAlign(LEFT, CENTER);
            textSize(10);

            push();
            translate(xPosition + (this.barWidth / 2), 12);
            rotate(30);
            text(this.data[i][this.xAxisValue], 0, 0);
            pop();
        }
        pop();

        //x-Axis-Label
        fill(this.axisTextColour);
        textSize(50);
        textAlign(CENTER, CENTER);
        text(this.xAxisLabel, this.chartWidth / 2, 80);

        //Y-axis Label (Rotated)
        push();
        fill(this.axisColour)
        translate(-60, -this.chartHeight / 2);
        rotate(-90);
        text(this.yAxisLabel, 0, -40);
        pop();

        //Ticks
        noFill();
        stroke(this.tickColour);
        strokeWeight(this.tickStrokeWeight);
        let tickGap = this.chartHeight / this.numTicks;

        for(let i = 0; i <= this.numTicks; i++){
            let tickValue = (i * (max(this.data.map(row => row[this.yAxisValue])) / this.numTicks)).toFixed(0);
            line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap);
            textAlign(RIGHT, CENTER);
            textSize(15);
            text(tickValue, -this.tickPadding - this.tickStrokeLength, -i * tickGap);
        }
        
        pop();
    }
}

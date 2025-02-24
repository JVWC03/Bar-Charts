class HorizontalBarChart {
    constructor(obj) {
        //data
        this.data = obj.data;
        this.xAxisValue = obj.xAxisValue; 
        this.yAxisValue = obj.yAxisValue; 

        //size
        this.chartHeight = obj.chartHeight;
        this.chartWidth = obj.chartWidth;
        this.barWidth = obj.barWidth;
        this.margin = obj.margin;
        this.axisThickness = obj.axisThickness;

        //positioning
        this.chartPosX = obj.chartPosX;
        this.chartPosY = obj.chartPosY;
        this.xAxisLabel = obj.xAxisLabel;
        this.yAxisLabel = obj.yAxisLabel;
        this.startBar = obj.startBar;

        //title
        this.titleLabel = obj.titleLabel;

        //text
        this.textStrokeWeight = obj.textStrokeWeight;
        this.numberStrokeWeight = obj.numberStrokeWeight;

        //ticks
        this.tickColour = obj.tickColour;
        this.tickStrokeWeight = obj.tickStrokeWeight;
        this.tickStrokeLength = obj.tickStrokeLength;
        this.tickPadding = obj.tickPadding;
        this.numTicks = obj.numTicks;
        this.tickTextColour = obj.tickTextColour;
        this.tickTextSize = obj.tickTextSize;

        //calculations
        this.gap = (this.chartHeight - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1);
        this.scaler = this.chartWidth / (max(this.data.map(row => row[this.xAxisValue])));

        //colours
        this.axisColour = color(13, 13, 11);
        this.barColour = color(67, 246, 246);
        this.axisTextColour = color(0, 0, 0);
    }

    render() {
        //title
        fill(0);
        textSize(24);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text(this.titleLabel, this.chartPosX + this.chartWidth / 2, this.chartPosY - this.chartHeight - 40);

        push();
        translate(this.chartPosX, this.chartPosY);
        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line(0, 0, this.chartWidth, 0);
        line(0, 0, 0, -this.chartHeight);

        push();
        translate(0, -this.margin);
        for (let i = 0; i < this.data.length; i++) {
            //BOMDAS
            let yPosition = -((this.barWidth + this.gap) * i);
            fill(this.barColour);
            noStroke();
            rect(this.startBar, yPosition - this.barWidth, this.data[i][this.xAxisValue] * this.scaler, this.barWidth);

            fill(this.axisTextColour);
            noStroke();
            textAlign(RIGHT, CENTER);
            textSize(10);
            text(this.data[i][this.yAxisValue], -this.tickPadding, yPosition - this.barWidth / 2);
        }
        pop();

        //X-Axis Label
        fill(this.axisTextColour);
        noStroke();
        textSize(30);
        textAlign(CENTER, CENTER);
        text(this.xAxisLabel, this.chartWidth / 2, 70);

        //Y-axis Label 
        push();
        fill(this.axisColour);
        textSize(30);
        translate(-130, -this.chartHeight / 2);
        rotate(-90);
        text(this.yAxisLabel, 0, 10);
        pop();

        //Ticks
        noFill();
        stroke(this.tickColour);
        strokeWeight(this.tickStrokeWeight);
        let tickGap = this.chartWidth / this.numTicks;

        for (let i = 0; i <= this.numTicks; i++) {
            let tickValue = (i * (max(this.data.map(row => row[this.xAxisValue])) / this.numTicks)).toFixed(0);
            line(i * tickGap, 0, i * tickGap, this.tickStrokeLength);
            textAlign(CENTER, CENTER);
            textSize(15);
            fill(255, 233, 34);
            text(tickValue, i * tickGap, this.tickPadding + this.tickStrokeLength);
        }

        pop();
    }
}

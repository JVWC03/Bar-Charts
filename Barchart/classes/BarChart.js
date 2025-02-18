class BarChart {
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

        //title
        this.titleLabel = obj.titleLabel;

        //text
        this.textStrokeWeight = obj.textStrokeWeight;
        this.numberStrokeWeight = obj.numberStrokeWeight;

        //ticks
        this.tickColour = obj.tickColour;
        this.tickStrokeWeight = obj.tickStrokeWeight;
        this.tickStrokeLength = obj.tickStrokeLength;
        this.tickPadding = obj.tickPadding,
        this.numTicks = obj.numTicks,
        this.tickTextColour = obj.tickTextColour,
        this.tickTextSize = obj.tickTextSize

        //calculations
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1);
        this.scaler = this.chartHeight / (max(this.data.map(row => row[this.yAxisValue])));

        //colours
        this.axisColour = color(13,13,11);
        this.barColour = color(255, 128, 0);
        this.axisTextColour = color(0, 0, 0);
    }

    //To-Do: Class 18th Feb - check bar chart is suitable

    render(){
        //title
        fill(0); 
        textSize(24);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text(this.titleLabel, this.chartPosX + this.chartWidth / 2, this.chartPosY - this.chartHeight - 40);

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
            rotate(40);
            text(this.data[i][this.xAxisValue], 0, 0);
            pop();
        }
        pop();

        //x-Axis-Label
        fill(this.axisTextColour);
        noStroke();
        textSize(30);
        textAlign(CENTER, CENTER);
        text(this.xAxisLabel, this.chartWidth / 2, 90);

        //Y-axis Label (Rotated)
        push();
        fill(this.axisColour)
        textSize(30);
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
            strokeWeight(this.tickStrokeWeight);
            fill(255, 233, 34);
            text(tickValue, -this.tickPadding - this.tickStrokeLength, -i * tickGap);
        }
        
        pop();
    }
}

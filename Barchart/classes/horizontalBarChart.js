class HorizontalBarChart {
    constructor(obj) {
        //data
        this.data = obj.data;
        this.xAxisValue = obj.xAxisValue; 
        this.yAxisValue = obj.yAxisValue; 

        //size
        this.chartHeight = obj.chartHeight || 500;
        this.chartWidth = obj.chartWidth || 500;
        this.barWidth = obj.barWidth || 15;
        this.margin = obj.margin || 10;
        this.axisThickness = obj.axisThickness || 1;

        //positioning
        this.chartPosX = obj.chartPosX || 170;
        this.chartPosY = obj.chartPosY || 650;
        this.xAxisLabel = obj.xAxisLabel;
        this.yAxisLabel = obj.yAxisLabel;
        this.startBar = obj.startBar || 0;

        //title
        this.titleLabel = obj.titleLabel;

        //text
        this.textStrokeWeight = obj.textStrokeWeight || 1;
        this.numberStrokeWeight = obj.numberStrokeWeight || 1;

        //ticks
        this.tickColour = obj.tickColour;
        this.tickStrokeWeight = obj.tickStrokeWeight || 3;
        this.tickStrokeLength = obj.tickStrokeLength || 10;
        this.tickPadding = obj.tickPadding || 10;
        this.numTicks = obj.numTicks || 5;
        this.tickTextColour = obj.tickTextColour;
        this.tickTextSize = obj.tickTextSize || 50;

        //font
        this.font = obj.font;

        //calculations
        //calculates gap between bars using relevant formula
        this.gap = (this.chartHeight - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1);
        //calculates the scaler by dividing width of the chart by the max value in the xAxisValue in this case 'Goals'
        this.scaler = this.chartWidth / (max(this.data.map(row => row[this.xAxisValue])));

        //colours
        this.axisColour = color(13, 13, 11);
        this.barColour = color(67, 246, 246);
        this.axisTextColour = color(0, 0, 0);
    }

    render() {
        //font
        textFont(this.font);
        //title
        fill(0);
        textSize(24);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text(this.titleLabel, this.chartPosX + this.chartWidth / 2, this.chartPosY - this.chartHeight - 40);

        //starts a new chart drawing
        push();
        //pushes co-ordinate system to set chart positions
        translate(this.chartPosX, this.chartPosY);
        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        //draws the axis
        line(0, 0, this.chartWidth, 0);
        line(0, 0, 0, -this.chartHeight);

        //draws the bars
        push();
        translate(0, -this.margin);
        for (let i = 0; i < this.data.length; i++) {
            //BOMDAS - do brackets first 
            let yPosition = -((this.barWidth + this.gap) * i);
            //sets colour of bars
            fill(this.barColour);
            noStroke();
            //draws bar from y-axis across
            rect(this.startBar, yPosition - this.barWidth, this.data[i][this.xAxisValue] * this.scaler, this.barWidth);

            fill(this.axisTextColour);
            noStroke();
            textAlign(RIGHT, CENTER);
            textSize(10);
            //displays team names (yAxisValue) along the y-axis
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
        //calculates gap between ticks by dividing chart width by set number of ticks
        let tickGap = this.chartWidth / this.numTicks;

        for (let i = 0; i <= this.numTicks; i++) {
            //calculates x axis position for ticks by dividing max value by number of ticks, rounds to full number using to.Fixed(0)
            let tickValue = (i * (max(this.data.map(row => row[this.xAxisValue])) / this.numTicks)).toFixed(0);
            //draws ticks on x-axis
            line(i * tickGap, 0, i * tickGap, this.tickStrokeLength);
            textAlign(CENTER, CENTER);
            textSize(15);
            //sets fill colour for ticks
            fill(255, 233, 34);
            text(tickValue, i * tickGap, this.tickPadding + this.tickStrokeLength);
        }

        pop();
    }
}

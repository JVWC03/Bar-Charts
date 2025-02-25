class StackedBarChart {
    constructor(obj) {
        //data
        this.data = obj.data;
        this.xAxisValue = obj.xAxisValue;
        this.yAxisValues = obj.yAxisValues;

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

        this.possession = this.data.map(el => el.Possession); 
        this.goals = this.data.map(el => el.Goals); 

        //calculations
        this.total = Math.max(...this.possession.map((num, i) => num + this.goals[i])); 
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1);
        this.scaler = round(this.chartHeight / this.total, 0); 

        //font
        this.font = obj.font;

        //colours
        this.axisColour = color(13, 13, 11);
        //Possession (235, 247, 10) Yellow -> Goals 
        this.barColours = [color(235, 247, 10), color(255, 21, 21)];
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

        push();
        translate(this.chartPosX, this.chartPosY);
        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line(0, 0, 0, -this.chartHeight); 
        line(0, 0, this.chartWidth, 0); 

        push();
        translate(this.margin, 0);

        //horizontal loop - 
        for (let i = 0; i < this.data.length; i++) {
            //calculates the position of each bar on the x-axis
            let xPosition = (this.barWidth + this.gap) * i;

            push()
            translate(xPosition, 0)

            push()
            //vertical loop
            for (let j = 0; j < this.yAxisValues.length; j++) {
                fill(this.barColours[j]);
                noStroke();

                //draws each bar
                rect(0, this.startBar, this.barWidth, -this.data[i][this.yAxisValues[j]] * this.scaler);
                //moves each bar on top of previous bar with small gap between
                translate(0, -this.data[i][this.yAxisValues[j]] * this.scaler - 1)
            }
            pop();
            pop()

            //write x-axis text - team names
            fill(this.axisTextColour);
            noStroke();
            textAlign(LEFT, CENTER);
            textSize(10);

            push()
            translate(xPosition + (this.barWidth/2), 10)
            rotate(90)
            text(this.data[i][this.xAxisValue], 0, 0);
            pop()
        }

        //x-Axis-Label
        fill(this.axisTextColour);
        noStroke();
        textSize(30);
        textAlign(CENTER, CENTER);
        text(this.xAxisLabel, this.chartWidth / 2, 150);

        //y-Axis-Label
        push();
        fill(this.axisColour);
        textSize(30);
        translate(-60, -this.chartHeight / 2);
        rotate(-90);
        text(this.yAxisLabel, 0, -80);
        pop();

        //ticks
        noFill();
        stroke(this.tickColour);
        strokeWeight(this.tickStrokeWeight);
        let tickGap = this.chartHeight / this.numTicks;

        for (let i = 0; i <= this.numTicks; i++) {
            let tickValue = Math.round(i * (this.total / this.numTicks)).toFixed(0); 
            //line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap); 
            textAlign(RIGHT, CENTER);
            textSize(15);
            strokeWeight(this.tickStrokeWeight);
            fill(255, 233, 34);
            text(tickValue, -this.tickPadding - this.tickStrokeLength, -i * tickGap);
        }

        pop();
    }
}

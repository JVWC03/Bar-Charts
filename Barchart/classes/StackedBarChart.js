class StackedBarChart {
    constructor(obj) {
        //data
        this.data = obj.data;
        this.xAxisValue = obj.xAxisValue;
        this.yAxisValues = obj.yAxisValues;

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

        this.possession = this.data.map(el => el.Possession); 
        this.goals = this.data.map(el => el.Goals); 

        this.total = Math.max(...this.possession.map((num, i) => num + this.goals[i])); 

        //calculations
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1);
        this.scaler = round(this.chartHeight / this.total, 0); 

        //colours
        this.axisColour = color(13, 13, 11);
        this.barColours = [color(255, 128, 0), color(235, 247, 10)];
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
        line(0, 0, 0, -this.chartHeight); 
        line(0, 0, this.chartWidth, 0); 

        push();
        translate(this.margin, 0);

        //horizontal loop
        for (let i = 0; i < this.data.length; i++) {
            let xPosition = (this.barWidth + this.gap) * i;

            push()
            translate(xPosition, 0)

            push()
            //vertical loop
            for (let j = 0; j < this.yAxisValues.length; j++) {
                fill(this.barColours[j]);
                noStroke();

                rect(0, this.startBar, this.barWidth, -this.data[i][this.yAxisValues[j]] * this.scaler);
                translate(0, -this.data[i][this.yAxisValues[j]] * this.scaler - 1)
            }
            pop();
            pop()

            fill(this.axisTextColour);
            noStroke();
            textAlign(LEFT, CENTER);
            textSize(10);

            push()
            translate(xPosition + (this.barWidth/2), 10)
            rotate(45)
            text(this.data[i][this.xAxisValue], 0, 0);
            pop()
        }

        //x-Axis-Label
        fill(this.axisTextColour);
        noStroke();
        textSize(30);
        textAlign(CENTER, CENTER);
        text(this.xAxisLabel, this.chartWidth / 2, 120);

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

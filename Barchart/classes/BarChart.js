class BarChart {
    constructor (obj) {
        this.x = obj.x;
        this.y = obj.y;
        this.w = obj.w;
        this.h = obj.h;

    this.data = obj.data;
    this.yAxisValue = obj.yAxisValue;
    this.xAxisLabel = obj.xAxisLabel;

    this.titleXOffset = obj.titleXOffset;
    this.titleYOffset = obj.titleYOffset;
    this.titleSize = obj.titleSize;
    this.titleColor = obj.titleColor;
    this.titleText = obj.titleText;
    this.titleWidth = obj.titleWidth;

    this.axisLineColor = obj.axisLineColor;
    this.axisLineThickness = obj.axisLineThickness;

    this.tickColour = obj.tickColour;
    this.tickStrokeWeight = obj.tickStrokeWeight;
    this.tickStrokeLength = obj.tickStrokeLength;
    this.tickPadding = obj.tickPadding,
    this.numTicks = obj.numTicks,
    this.tickTextColour = obj.tickTextColour,
    this.tickTextSize = obj.tickTextSize

    this.barWidth = obj.barWidth;
    this.barColor = obj.barColor;
    this.barStrokeThickness = obj.barStrokeThickness;
    this.barStrokeColour = obj.barStrokeColour;
    this.numBars = this.data.length;

    this.labelPadding = obj.labelPadding;
    this.labelRotation = obj.labelRotation;

    this.labelTextSize = obj.labelTextSize;

    this.labelColour = obj.labelColour;
    }

    render() {
        push();
        translate(this.x,this.y);

        noFill();
        this.barStrokeColour(this.axisLineColor);

        this.tickStrokeWeight(this.axisLineThickness);

        line(0, 0, thid.w, 0);
        line(0, 0, 0, -this.h);

        noStroke();
        fill(this.barColor);

        let barGap = (this.w - (this.numBars * this.barWidth)) / (thid.numBars + 1);

        for (let i = 0; i < this.numBars; i++) {

            let jump = (barGap * (i+1)) + (this.barWidth * i);
            let colHeight = this.data[i].Total * 10;
            rect(jump, 0, this.barWidth, -colHeight);
        }
        pop();
    }
    }
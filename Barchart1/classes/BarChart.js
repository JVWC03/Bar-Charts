class BarChart {
    constructor (_data, _x, _y, _chartHeight, _chartWidth, _barWidth, _margin, _axisThickness, _positionX, _positionY) {
        this.data = _data;
        this.x = _x;
        this.y = _y;
        this.chartHeight = _chartHeight;
        this.chartWidth = _chartWidth;
        this.barWidth = _barWidth;
        this.margin = _margin;
        this.axisThickness = _axisThickness;
        this.positionX = _positionX;
        this.positionY = _positionY;

        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1)
        this.scaler = this.chartHeight / (max(cleanedData.map(row => row[this.y])));

        this.axisColour = color(0, 0, 0);
        this.barColour = color(255, 128, 0);
        this.axisTextColour = color(0, 0, 0);
    }

    
}
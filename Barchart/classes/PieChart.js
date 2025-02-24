class PieChart {  
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

        //title
        this.titleLabel = obj.titleLabel;

        //calculations
        this.scaler = this.chartHeight / (max(this.data.map(row => row[this.yAxisValue]))); 
        this.maxValue = 0;

        //colours
        this.textColour = color(0, 0, 0);
        
        //array that maps all teams corners
        this.cornersArray = this.data.map(row => row.Corners);
        this.total = 0;
        this.cornersArray.forEach(item => this.total = this.total + item);
 
        this.angleStart = 0;
        this.trackAngle = 0
       
    }
   
    render() {      
        //title
        // fill(0);
        // textSize(24);
        // textStyle(BOLD);
        // textAlign(CENTER, CENTER);
        // text(this.titleLabel, this.chartPosX + this.chartWidth / 2, this.chartPosY - this.chartHeight - 40);   

        push(); 
        translate(this.chartPosX, this.chartPosY);
;
        for (let i = 0; i < this.cornersArray.length; i++) {
            fill(random(255), 120, 23);
            stroke(255);
            let angleEnd = (this.cornersArray[i] / this.total) * 360;
            arc(0, 0, 650, 650, this.angleStart, angleEnd, PIE);
 
            let midAngle = (angleEnd-this.angleStart)/2;
            let xPosition = 150*cos(midAngle);
            let yPosition = 150*sin(midAngle)
 
            //text
            fill(this.textColour)
            noStroke()
            textSize(25);
            push();
            translate(xPosition, yPosition);
           
            if(this.trackAngle<150){
                rotate(midAngle)
            }
            else {
                rotate(midAngle)
            }
           
            textAlign(LEFT,CENTER)
            textSize(15)
            text(this.data[i][this.xAxisValue], 0, 0);
 
            pop()
            rotate (angleEnd);
 
            this.trackAngle = this.trackAngle + angleEnd;
        }
        pop(); 
    }
}
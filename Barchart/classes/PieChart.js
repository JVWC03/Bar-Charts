class PieChart {  
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

        //title
        this.titleLabel = obj.titleLabel;

        //calculations
        this.scaler = this.chartHeight / (max(this.data.map(row => row[this.yAxisValue]))); 
        this.maxValue = 0;

        //colours + design
        this.axisTextColour = color(0, 0, 0);
        this.pieStroke = obj.pieStroke || 1;

        //font
        this.font = obj.font;
        
        //array that maps all teams corners
        this.cornersArray = this.data.map(row => row.Corners);
        this.total = 0;
        this.cornersArray.forEach(item => this.total = this.total + item);
 
        //sets the start of the angle to 0       
        this.startAngle = 0;
        //start tracking angle from 0
        this.trackAngle = 0;
       
    }
   
    render() {      
        //font
        textFont(this.font);
        //title
        fill(0);
        textSize(24);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        noStroke();
        text(this.titleLabel, 290, this.chartPosY - this.chartHeight + 60);   

        //start new chart drawing
        push(); 
        translate(this.chartPosX, this.chartPosY);

        for (let i = 0; i < this.cornersArray.length; i++) {
            fill(random(255), 120, 23);
            stroke(this.pieStroke);
            //find the end of eachslice
            let angleEnd = (this.cornersArray[i] / this.total) * 360;
            //draw each pie chart slice
            arc(0, 0, 600, 600, this.startAngle, angleEnd, PIE);
            
            //calculate middle angle for text in slices
            let middleAngle = (angleEnd-this.startAngle)/2;
            //find x and y text positions
            let xPosition = 150*cos(middleAngle);
            let yPosition = 150*sin(middleAngle)
 
            //writing slice text
            fill(this.axisTextColour)
            noStroke()
            textSize(25);
            push();
            translate(xPosition, yPosition);
           
            //centers the text in each slice
            if(this.trackAngle<150){
                rotate(middleAngle)
            }
            else {
                rotate(middleAngle)
            }
           
            //align text
            textAlign(LEFT,CENTER)
            textSize(17)
            text(this.data[i][this.xAxisValue], 0, 0);
 
            pop()
            //set start angle for new slice
            rotate(angleEnd);
 
            //track total angle covered
            this.trackAngle = this.trackAngle + angleEnd;
        }
        pop(); 
    }
}
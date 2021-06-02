function StopWatch () { 
    let seconds = 0;
    let myTimer;
    

    this.counter = () => {
            seconds++
            document.getElementById("demo").innerHTML = seconds;
            
        };
        
    this.start = () => {
            this.counter();
            myTimer = setInterval(this.counter, 1000);
    };
        
    this.stop = () => {     
         clearInterval(myTimer);
         console.log(seconds);
    };

    this.reset = () => {
        seconds = 0;
        clearInterval(myTimer);
        console.log(seconds);
        document.getElementById("demo").innerHTML = seconds;
    };
}

const sw = new StopWatch();

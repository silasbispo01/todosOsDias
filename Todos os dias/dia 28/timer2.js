function StopWatch () { 
    let startTime, endTime, running, duration = 0;
       
    this.start = () => {
        if (running)
            throw new Error('Timer já começou');

        running = true;

        startTime = new Date();
    };
        
    this.stop = () => {     
        if (!running)
            throw new Error('Timer já está pausado');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = () => {
        startTime = null,
        endTime = null,
        running = false,
        duration = 0,
        console.log(this.duration)
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
    })
}

const sw = new StopWatch();

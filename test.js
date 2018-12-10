var myCar2 = {
    maxSpeed: 75, 
    driver: 'Net Ninja', 
    logDrive:function() {
        //this object information
        console.log('driver name is ' + this.driver)
    }
}

//constructor
var Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed
    this.driver = driver
    this.drive = function(speed, time) {
        console.log(speed * time)
    }
    this.logDriver = function() {
        console.log('driver name is ' + this.driver)
    }
}

//object
var myCar = new Car(70, 'Ninja Man')
var myCar2 = new Car(80, 'Shaun')




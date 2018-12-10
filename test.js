var myArray = new Array()
myArray[0] = 8;
myArray[1] = 'hello'
console.log(myArray)

var myCar = new Object()
myCar.maxSpeed = 50
myCar.driver = 'Shaun'

myCar.drive = function() {
    console.log('now driving')
}

var myVar = 'hey'
myCar.drive()


var myCar2 = {
    maxSpeed: 75, 
    driver: 'Net Ninja', 
    drive:function(speed, time) {
        console.log(speed * time)
    }
}


console.log(myCar2.drive(50, 3))



let food;

function orderfood(callback){
    console.log('ordered food, now waiting...')
    setTimeout(()=> {
        food = 'burger'
        callback(food)
    }, 20000)

} 

function foodReady(meal){
    console.log(`${meal} is ready to eat`)
}

orderfood(foodReady)
console.log('calling friend')
console.log('ironing clothes')


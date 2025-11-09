func1 = async () => {
    let delhiWeather = new Promise((resovle, reject) => {
        setTimeout(() => {
            resovle('37 Degree')
        }, 1500)
    })

    let bangloreWeather = new Promise((resovle, reject) => {
        setTimeout(() => {
            resovle('21 Degree')
        }, 2500)
    })

    console.log('Fetching Delhi weather');
    let delhiW = await delhiWeather;
    console.log('Fetched Delhi Weather : ' + delhiW);

    console.log('Fetching Bangalore weather');
    let bangloreW = await bangloreWeather;
    console.log('Fetched Bangalore Weather : ' + bangloreW)
    return [delhiW, bangloreW];
}

func2 = () => {
    console.log('This will not return any promise as not an async Function')
}

//Here func2 will not await for completion of func1 as not contained inside async func
console.log('Welcome to Weather Control Room : ')
//.then will print the value return from async func(async is a special syntax which return a promise)
func1().then((x) => {
    console.log(x)
})
func2();


//Output :
// Welcome to Weather Control Room :
// Fetching Delhi weather
// This will not return any promise as not an async Function
// Fetched Delhi Weather : 37 Degree
// Fetching Bangalore weather
// Fetched Bangalore Weather : 21 Degree
// [ '37 Degree', '21 Degree' ]
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

func2 = async () => {
    console.log('This will return promise as it is an async Function')
}

//Here func2 will await for completion of func1 as contained inside async func
mainFunc = async () => {
    console.log('Welcome to Weather Control Room : ')
    await func1();
    await func2();
}

mainFunc();

// // Output : 
// Welcome to Weather Control Room : 
// Fetching Delhi weather
// Fetched Delhi Weather : 37 Degree
// Fetching Bangalore weather
// Fetched Bangalore Weather : 21 Degree
// This will return promise as it is an async Function
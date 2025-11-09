let p = fetch('https://goweather.herokuapp.com/weather/california');
p.then((response) => {
    // console.log(response.status);
    // console.log(response.ok);
    // console.log(response.headers);
    return response.json();
    // console.log(response.json) // if we try to read here it will return Promise { <pending> }, that's why we have used 2 then
}).then((jsonRes) => {
    console.log(jsonRes);
})
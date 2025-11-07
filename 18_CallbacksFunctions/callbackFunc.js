//callback example
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => {
        console.log('Script Loaded : ' + src)
        callback(src);
    }
    document.head.append(script);
}

function hello(src) {
    console.log("Hello World!" + src)
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js', hello);

//If doing Error handling with callbacks function
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => {
        console.log('Script Loaded : ' + src)
        callback(null, src);
    }
    script.onerror = () => {
        console.log('Some Error Occured')
        callback(new Error('Some Error in Loading :' + src))
    }
    document.head.append(script);
}

function helloError(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Hello World!" + src)
}

loadScript('https://cdn.jsdedfalivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js', helloError);
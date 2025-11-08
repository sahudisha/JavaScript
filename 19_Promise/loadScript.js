//Loading loadScript using Promise to resolve callback Hell.

const loadScript = (src) => {
    var script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script)
    return new Promise((resolve, reject) => {
        script.onload = () => { resolve("Script has been loaded...!!!") }
        script.onerror = () => { reject("Script Loading has failed...!!!") }
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value)
    return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then(() => {
    console.log("Second script ready")
}).catch((error) => {
    console.log("We are sorry but we are having problems loading this script")
})
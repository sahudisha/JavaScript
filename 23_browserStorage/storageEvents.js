// Open tab in two places and once a value is updated for localstorage in one tab other tab will get the alert

localStorage.setItem('Name', 'Disha Sahu')

window.onstorage = (e) => {
    alert('LocalStorage Value Changed')
    console.log(e)
}
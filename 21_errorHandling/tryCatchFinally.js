//The finally block will be executed just before the controls returns to the external code even if their is return in try block

func = () => {
    try {
        console.log('Arunesh');
        return;
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('This is a Finally Block')
    }
}

func();
console.log('The Script has ran successfully...!!!')
//jsonPlaceholder(https://jsonplaceholder.typicode.com/) provides free fake and reliable API for testing and prototyping. 

const createTodo = async (todo) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }
    let res = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let jsonRes = await res.json();
    return jsonRes;
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
        Name: 'Arunesh',
        Surname: 'Singh',
        userId: 1100,
    }
    let todoRes = await createTodo(todo)
    console.log(todoRes)
    console.log(await getTodo(5))
}

mainFunc()
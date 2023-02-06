const obj = {
    name: 'hhh'
}

const createApp = ((...args) => {
    console.log(args)
    return 'aaa'
})

console.log(createApp(obj))
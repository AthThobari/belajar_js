const getData = async () => {
    const result = await
    fetch('https://pokeapi.co/api/v2/pokemon')
    const resultObj = await result.json()
    console.log(resultObj)
}

getData()
const getDetail = async () => {
    const result = await
    fetch('https://pokeapi.co/api/v2/pokemon/13')
    const resultObj = await result.json()
    console.log(resultObj)
}

getDetail()
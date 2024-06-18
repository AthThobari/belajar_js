const student = [
    {
        name: "Muhammad",
        age: 23,
        isMarried: true,
        hobby: ["ngoding"]
    },
    {
        name: "Michael",
        age: 23,
        isMarried: false,
        hobby: ["ngoding"]
    },
    {
        name: "Raihan",
        age: 22,
        isMarried: true,
        hobby: ["ngoding"]
    },
    {
        name: "Zaidan",
        age: 18,
        isMarried: false,
        hobby: ["game"]
    },
    {
        name: "Shabri",
        age: 17,
        isMarried: true,
        hobby: ["game"]
    }
]

for (let i = 0; i < student.length; i++) {
    console.log(student[i].hobby[0])
    
}
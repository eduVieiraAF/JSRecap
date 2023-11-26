
/*
    * Multidimentional matrix is an array of arrays
*/

const example1 = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]

console.table(example1)

/*
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│    0    │ 1 │ 2 │ 3 │
│    1    │ 4 │ 5 │ 6 │
│    2    │ 7 │ 8 │ 9 │
└─────────┴───┴───┴───┘

* so in order to access the element we need to use the index of the row and the index of the column
console.log(example1[0][1]) // 2
*/

console.log(example1[0][0]) // 1
console.log(example1[1][1]) // 5
console.log(example1[2][2]) // 9

const example2 = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9],
    [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18]
    ]
]

console.table(example2)
console.log(example2[3][1][1]) // 14
console.log(example2[3][2][2]) // 18
console.log(example2[3][0][0]) // 10
console.log(example2[3][1][0]) // 13
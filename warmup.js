/*
    1. Create an variable called "points" that points at this array:
       [10, 15, 20, 30, 5]

    2. Create another variable called "pointsCopy" that creates a
       copy of "points" using the spread operator, but also adds
       2 extra values at the end: 50 and 75

    3. Print out both "pointsCopy" and "points"
*/

let points =  [10, 15, 20, 30, 5]

let pointsCopy = [...points]

pointsCopy.push(50)
pointsCopy.push(70)


console.log(points)
console.log(pointsCopy)
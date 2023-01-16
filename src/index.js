
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let rez_arr = [];
    let matrixString = [];


    for (const i in matrix) {
        i % 2 ? matrixString = matrix[i].reverse() : matrixString = matrix[i]
        for (const element of matrixString) {
            rez_arr.push(element)
        }


  
        
    }
    return rez_arr
}

/* const matrix = [
    [1, 2],
    [3, 4],
  ];

function towelSort(matrix) {
    let rez_arr = [];
    console.log(rez_arr)
    let matrixString = [];
  

    for (const i in matrix) {
    i % 2 ? matrixString = matrix[i].reverse() : matrixString = matrix[i]
    for (const element of matrixString) {
        rez_arr.push(element)
    }

    
    !typeof(rez_arr) ? rez_arr = [] : true

    return rez_arr
            
    

   
  }

}
towelSort() */



//create a function expression named 'sort'
//'sort' will sort an array of values in the following sequence
// null,0,1,2,3....9999,Infinity,'A','B'...'a','b','c','d',....,'z','aa',...,'zzzzz'
function sort(array){
    let swaps = 0;
    for (let i = 0; i < array.length-1; i++){
        if(array[i] === null){
        } else if (array[i+1] === null){
            swaps++;
            array[i+1] = array[i];
            array[i] = null;
        } else if (array[i] === Infinity && (typeof array[i+1]) === 'number'){
            console.log('Im running here');
            swaps++;
            array[i] = array[i+1];
            array[i+1] = Infinity;
        } else if (array[i+1] === Infinity){
        } else if (array[i].toString() > array[i+1].toString()){
            swaps++;
            let cache = array[i];
            array[i] = array[i+1];
            array[i+1] = cache;
        }
    }
    if (swaps === 0){
        return array;
    } else {
        return sort(array);
    }
}


module.exports = {
    sort
}
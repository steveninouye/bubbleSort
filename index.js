//create a function expression named 'sort'
//'sort' will sort an array of values in the following sequence
// null,0,1,2,3,....9999,Infinity,'A','AA','B','BA',...'a','aa','b','bb','c','d',....,'z',...,'zzzzz'
//----if sort is given null it will return null
//----if sort is givne undefined it will return undefined
function sort(array){
    if (array === null){
        return null;
    };
    let swaps = 0;
    
    if (swaps === 0){
        return array;
    } else {
        return sort(array);
    }
}


module.exports = {
    sort
}
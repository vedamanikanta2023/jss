const area =  function(radius){
    return Math.PI*radius*radius
}
const circomference = function(radius){
    return 2*Math.PI*radius
}

const diameter = function(radius){
    return 2 * radius;
}

const radiuses = [3,1,2,4]
Array.prototype.calculate = function(logic){
    const output = [];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}

// console.log(calculate(area))
const areas = radiuses.calculate(area)
console.log(areas)
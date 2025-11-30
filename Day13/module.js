// export const Pi = 3.14; by using common js module.exports = { Pi: 3.14 };
module.exports = { Pi: 3.1456789 };

module.exports=function add(a,b){
    return a+b;
}
//    console.log(add(12,34))
module.exports.subtract=function subtract(a,b){
    return a-b;
}
// console.log(subtract(12,5))
module.exports.multiply=function multiply(a,b){
    return a*b;
}
// console.log(multiply(4,5))
module.exports.divide=function divide(a,b){
    return a/b;
}
// console.log(divide(20,4))
module.exports.modulus=function modulus(a,b){
    if(a%b!=0){
        return a%b;

    }
    else{
        return 0;
    }

}
// console.log(modulus(20,3))
module.exports.square=function square(a){
    return a*a;
}
// console.log(square(5))

    

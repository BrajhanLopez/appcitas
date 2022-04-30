
let arr=[0,1]
let limit=20
let suma=1

for (let i = 0; i < limit; i++) {
 
    
//  1  >  2 
if (suma>limit) {
        
    break;
   

}
else
{
    suma = arr[arr.length - 1] + arr[arr.length - 2]

    arr.push(suma)
}


}
console.log(arr);

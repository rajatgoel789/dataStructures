/*
given an array, replace all the elements of the array such that ar[i] should become max of ar[j] given that j > i ,
i.e. replace all the elements with maximum element to the right of it
e.g. 5 3 7 2 4 1
     7 7 4 4 1 -1
*/
var input = [5,3,7,2,4,1]
// output be [7,7,4,4,1,-1]
var op = [] ; 
var temp,temp1  ; 
for(var i = input.length ; i>0 ; i--){
    if(i == input.length){
        temp1 = -1;   
        temp = input[i-1] ; 
        input[i-1] = temp1;
    }else{
        temp1 = temp > temp1 ? temp: temp1 ; 
        temp = input[i-1]; 
        input[i-1] = temp1 ; 
    }
}
console.log("Final op is ", input )



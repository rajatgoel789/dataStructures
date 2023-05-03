// Leet Code 11

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maximumArea = 0;
    
    while(left<=right){
        let h = Math.min(height[left], height[right])
        maximumArea =  Math.max( maximumArea , h* (right - left))
        if(height[left]<=height[right]){
            left++;
        }else{
            right--;
        }

    }

    return maximumArea;

};


//I/p=[1,8,6,2,5,4,8,3,7]
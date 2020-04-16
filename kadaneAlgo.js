

//kadane's simple algo
function maxSumSubarray(var arr[]){
    var max_so_far = 0;
    var max_ending_here = 0;
    for(var i=0;i<arr.length;i++){
        max_ending_here = max_ending_here + arr[i];
        if(max_ending_here<0){
            max_ending_here=0;
        }
        else if(max_so_far<max_ending_here){
            max_so_far = max_ending_here;
        }
    }
    return max_so_far;
}






// kadane's dynamic programming algo


function maxSumSubarray(var arr[]){

    var max_so_far = arr[0];
    var curr_max = arr[0];
    for(var i=0;i<arr.length;i++){
        curr_max = Math.max(curr_max, a[i]+curr_max);
        max_so_far = Math.max(curr_max, max_so_far);
    }
    return max_so_far;
}
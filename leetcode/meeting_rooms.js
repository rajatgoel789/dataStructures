
// LC252
var canAttendMeetings = function(intervals) {
    intervals  = intervals.sort((a,b)=>{ a[0]-b[0]});
    const start = 0;
    const end = 1;

    for(let i=0; i<intervals.length; i++){

        if(intervals[i][end]>intervals[i+1][start]){
            return false;
        }

    }
    return true;


}
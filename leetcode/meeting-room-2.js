// LC - 253

var minMeetingRooms = function(intervals){
    if(!intervals || !intervals.length) return 0 ;

    const start = intervals.map((interval)=>{  interval[0] }).sort((a,b)=>{ a-b})
    const ends = intervals.map((interval)=>{  interval[1] }).sort((a,b)=>{ a-b})

    let room = 0 ; let end = 0 ; 

    for ( let i=0;i<intervals.length ; i++){
        if(start[i]<ends[end] ){
            room++
        }else{
            end++
        }
    }

    return room
}
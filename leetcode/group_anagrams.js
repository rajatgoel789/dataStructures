// Leet Code - 49



/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let sorted = strs.map((s)=>{
        return s.split("").sort().join()
    })
    let _map = {};

    for (var i = 0; i<sorted.length;i++){
        if(!_map[sorted[i]]){
            _map[sorted[i]] = [strs[i]]
        }else {
            _map[sorted[i]].push(strs[i]);
        }
    }

    return Object.values(_map);
    
};
let num=[];
function cartesian(args) {
    var r = [], max = args.length-1;
    function helper(arr, i) {
        for (var j=0, l=args[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i==max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }
    helper([], 0);

    for (let i=0; i<r.length; i++){
        num[i] = +r[i].join("")
    }
    return num;
}
module.exports = cartesian;




var arr1=[1,3,67,8,90];



var obj = {}, matched = [],
            unmatched = [];
        for (var i = 0, l = arr1.length; i < l; i++) {
            obj[arr1[i]] = (obj[arr1[i]] || 0) + 1;
        }
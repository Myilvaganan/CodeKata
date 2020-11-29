  function getUnique(array)
    {
        var uniqueArray = " ";       // Loop through array values
        for(var value of array)
        {
            if(uniqueArray.indexOf(value) === -1)
            {
                uniqueArray=uniqueArray+value+" ";
            }
        }
        return uniqueArray;
    }
    
    var passportNum= userInput[1].split(" ");
    var uniqueNum = getUnique(passportNum);
   
    console.log(uniqueNum.trim());
module.exports =  function capitalize(str="", restToLoweropt=false){
    let newStr = "";

    newStr += str[0].toUpperCase()
    
        for (let i=1; i != str.length; i++)
        {
            if(restToLoweropt === true)
                newStr += str[i].toLowerCase()
            else
            newStr += str[i]
        } 
return newStr
}


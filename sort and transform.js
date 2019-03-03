function sortTransform(a){
    let numList = [a[0],a[1],a[a.length-2], a[a.length-1]]
    let plain = createString(convertToWord(numList))
    let asc = createString(getEnds(convertToWord(sortAscending(a))))
    let desc = createString(getEnds(convertToWord(sortDescending(a))))
    let alph = createString(getEnds(sortLetters(convertToWord(a))))

    let output = plain + "-" + asc + "-" + desc + "-" + alph
    console.log("output: " + output)
    return output

}

function convertToWord(numList){
    let letters = []
    for (let x = 0; x < numList.length; x++){
        letters.push(String.fromCharCode(numList[x]))
    }
    // console.log("converted:" + letters)
    return letters;
}

function sortAscending(numList){
    let sorted = numList.sort(function(a,b){
        return a - b
    })
    // console.log("sorted ascending:" + sorted)
    return sorted
}
function sortDescending(numList){
    let sorted = numList.sort(function(a,b){
        return b - a;
    })
    // console.log(sorted)
    return sorted
}
function sortLetters(letterList){
    // console.log('letterList:', letterList.sort())
    return letterList.sort()
}
function getEnds(numList){
    let ends = []
    ends.push(numList[0])
    ends.push(numList[1])
    ends.push(numList[numList.length-2])
    ends.push(numList[numList.length-1])
    console.log("ends:" + ends)
    return ends
}
function createString(list){
    let word = ""
    for (let x = 0; x < list.length; x++){
        word+= list[x]
    }
    console.log("word: " + word)
    return word;
}


// let list = [121, 122, 123, 124, 125, 120, 122, 132]
// let list2 = [111, 112, 113, 114, 115, 113, 114, 110]
// let list3 = [51, 62, 73, 84, 95, 100, 99, 126]
// sortTransform(list3);

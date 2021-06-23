var cityTemp = 'Albany|22.2*Caribou|9.5*Columbia|44.6*Denver|29.2*Indianapolis|26.5*Montgomery|46.6*San Diego|57.8*Tulsa|36.4*Tampa|61.3*Billings|24.0';

var tempArr = cityTemp.split("*")

function fahToCel(array){
  var temp; var tempArray; var str
  for(i = 0; i < array.length; i++){
      tempArray = array[i].split('|');
      temp = tempArray[1]
      temp = (temp - 32) * 5/9;
      temp = temp.toFixed(1)
      str = tempArray[0].concat("|", temp)
      array[i] = str;    
  }
  return array;
  
}

function organizeTemps(array){
    //main variables
    var temp;
    var str
    //Arrays
    var tempArray;
    var coldArray = ['Cold: '];
    var modArray= ['Moderate: '];
    var hotArray= ['Hot: '];
    //put values in arrays
    for(i = 0; i < array.length; i++){
      tempArray = array[i].split('|');
      
      if(tempArray[1] < 20){
        temp = tempArray[1]
        temp = '(' + temp + ')'
        str = tempArray[0].concat(" ", temp)
        console.log(str)
        coldArray.push(str)
        
      }
      else if(tempArray[1] >= 20 && tempArray <= 30){
        temp = tempArray[1]
        temp = '(' + temp + ')'
        str = tempArray[0].concat(" ", temp)
        modArray.push(str)
      }
      else{
        temp = tempArray[1]
        temp = '(' + temp + ')'
        str = tempArray[0].concat(" ", temp)
        hotArray.push(str)
      }
      
         
    }
    
    
    printArray(coldArray);
    
    printArray(modArray);
    
    printArray(hotArray);
    
}


function printArray(array){
  for(i = 0 ; i <array.length; i++){
    console.log(array[i])
  }
}

tempArr=fahToCel(tempArr)

organizeTemps(tempArr)

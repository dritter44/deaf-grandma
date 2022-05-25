function deafGrandma() {
    let countGB = 0
    while(countGB == 0) {
        let userInput = prompt("HEY KID!","Hello Grandma!")
       
        if(userInput === "GOODBYE!"){ //case to break the first while loop
            countGB++
            alert("LEAVING SO SOON?")
            
        }else if (userInput === ""){
            alert("WHAT?")
        
        }else if(userInput === userInput.toUpperCase() && userInput !== "GOODBYE!"){
            alert("NO, NOT SINCE 1946!")
        }else {
            alert("SPEAK UP KID!")
        }

    }
    while(countGB == 1) {
        let userInput = prompt("HEY KID!","Hello Grandma!")
       
        if(userInput === "GOODBYE!"){ //case to break the 2nd while loop
            alert("LATER SKATER!")
        return
            
        }else if (userInput === ""){
            alert("WHAT?")
        
        }else if(userInput === userInput.toUpperCase() && userInput !== "GOODBYE!"){
            alert("NO, NOT SINCE 1946!")
        }else {
            alert("SPEAK UP KID!")
        }

    }
    
}
deafGrandma();
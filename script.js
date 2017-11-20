var christmas = false;
var christmasCount = 0;

var christmasMode = function() {
    
    
    if (!christmas) {
        var button = document.getElementById("theButton");
        var body = document.getElementsByClassName("non-christmas")
        var head = document.getElementById("mainhead");
        
        document.body.style.background = 'darkgreen'; document.body.style.color = 'red'; document.body.style.fontFamily = 'cursive';
       
        button.innerHTML = "the war on christmas has become too great. you will become overrun by our warriors. disable christmas mode and surrender to the PC police";
        
        christmas = true;
        christmasCount += 1;

            
    }

    else {
        var button = document.getElementById("theButton");
        var body = document.getElementsByClassName("christmas");
        
        document.body.style.background = 'crimson'; document.body.style.color = 'skyblue';
        document.body.style.fontFamily = 'Comic Sans MS';
        
        button.innerHTML = "re-enable CHRISTMAS mode, we will not be silenced. forget starbucks, the next frontier is hottakes.cool";
        
        christmas = false;
        christmasCount += 1;
        
                
        if (christmasCount > 4) {
            document.body.innerHTML = "god, please stop";
        }
    }
}















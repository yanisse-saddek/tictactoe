var turn = 0;
    var boxList = ["","","","","","","","",""]
    win = ""
    function restart(){
        location.reload()
    }
    function checkWin(){
        oturn = document.getElementById('o-turn');
        egalite = document.getElementById('egalite');
        xturn = document.getElementById('x-turn');
        xwin = document.getElementById('x-win');
        owin = document.getElementById('o-win');

    if (win == "x"){
        console.log('x a gagné')
        var allBox = document.getElementsByClassName('case')
        for(i=0; i<allBox.length; i++){
        allBox[i].onclick = null;
        oturn.style.display ="none"
        xturn.style.display ="none"

        xwin.style.display ="inline"      
        }
        }else if(win == "o"){
        console.log('o a gagné')
        var allBox = document.getElementsByClassName('case')
        for(i=0; i<allBox.length; i++){
        allBox[i].onclick = null  
        oturn.style.display ="none"
        xturn.style.display ="none";   
        owin.style.display ="inline"     
        }
    }else if(win===""){
        oturn.style.display ="none"
        xturn.style.display ="none"
        egalite.style.display ="inline"     
        }
    }
    function checkCase(id){
        turn++
        box = document.getElementById(id);
        oturn = document.getElementById('o-turn');
        xturn = document.getElementById('x-turn');
        textinfo = document.getElementById('text-info')
        textinfo.style.display = "INLINE "

    
        if(turn % 2 === 0){
            box.style.backgroundImage = "url('img/croix.png')"
            box.style.backgroundSize = "70px"
            box.style.backgroundRepeat = "no-repeat"
            box.style.backgroundPosition = "center"
            boxList[id] = "x";
            oturn.style.display ="inline"
            xturn.style.display ="none"
        }else{
            box.style.backgroundImage = "url('img/cercle.png')"
            box.style.backgroundSize = "70px"
            box.style.backgroundRepeat = "no-repeat"
            box.style.backgroundPosition = "center"
            boxList[id] = "o"
            oturn.style.display ="none"
            xturn.style.display ="inline"
        }

        box.onclick = null;
            verifGagne()
        }
        function verifGagne(){
            if(boxList[0] == boxList[1] && boxList[1] == boxList[2] && boxList[0] !== '' && boxList[1] !== '' && boxList[2] !== ''){
                win = boxList[0]
                checkWin()
            }
            else if(boxList[3] == boxList[4] && boxList[4] == boxList[5] && boxList[3] !== '' && boxList[4] !== '' && boxList[5] !== ''){
                win = boxList[3]
                checkWin()
            }
            else if(boxList[6] == boxList[7] && boxList[7] == boxList[8] && boxList[6] !== '' && boxList[7] !== '' && boxList[8] !== ''){
                win = boxList[6]
                checkWin()
            }
            else if(boxList[0] == boxList[3] && boxList[3] == boxList[6] && boxList[0] !== '' && boxList[3] !== '' && boxList[6] !== ''){
                win = boxList[0]
                checkWin()
            }
            else if(boxList[1] == boxList[4] && boxList[4] == boxList[7] && boxList[1] !== '' && boxList[4] !== '' && boxList[7] !== ''){
                win = boxList[1]
                checkWin()
            }
            else if(boxList[2] == boxList[5] && boxList[5] == boxList[8] && boxList[2] !== '' && boxList[5] !== '' && boxList[8] !== ''){
                win = boxList[2]
                checkWin()
            }
            else if(boxList[0] == boxList[4] && boxList[4] == boxList[8] && boxList[0] !== '' && boxList[4] !== '' && boxList[8] !== ''){
                win = boxList[0]
                checkWin()
            }
            else if(boxList[2] == boxList[4] && boxList[4] == boxList[6] && boxList[2] !== '' && boxList[4] !== '' && boxList[6] !== ''){
                win = boxList[2]
                checkWin()
            }else if(boxList[0] !== "" && boxList[1] !== "" && boxList[2] !== "" && boxList[3] !== "" && boxList[4] !== "" && boxList[5] !== "" && boxList[6] !== "" && boxList[7] !== "" && boxList[8] !== ""){
                win=""
                checkWin()
            }
        }
function game(){
    appgame = document.getElementById('game-interface')
    appgame.style.display = "inline"
    menu = document.getElementById('menu-interface')
    menu.style.display = "none"
}
    var turn = "x";
    var boxList = ["","","","","","","","",""]
    win = ""
    function restart(){
        boxList = ["","","","","","","","",""]
        $("#game-interface").load(location.href + " #game-interface");
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
        box = document.getElementById(id);
        oturn = document.getElementById('o-turn');
        xturn = document.getElementById('x-turn');

        infos = document.getElementById('infos')
        infos.style.display = "flex"
    
        if(turn == "x"){
            box.style.backgroundImage = "url('img/croix.png')"
            box.style.backgroundSize = "70px"
            box.style.backgroundRepeat = "no-repeat"
            box.style.backgroundPosition = "center"
            boxList[id] = "x";
            oturn.style.display ="inline"
            xturn.style.display ="none"
            turn = 'o'
        }else if(turn=="o"){
            box.style.backgroundImage = "url('img/cercle.png')"
            box.style.backgroundSize = "70px"
            box.style.backgroundRepeat = "no-repeat"
            box.style.backgroundPosition = "center"
            boxList[id] = "o"
            oturn.style.display ="none"
            xturn.style.display ="inline"
            turn = 'x'

        }
        box.onclick = null;
            verifGagne()
            console.log(boxList)
        }
        function caseColor(case1, case2, case3){
            case1 = document.getElementById(case1.id)
            case2 = document.getElementById(case2.id)
            case3 = document.getElementById(case3.id)
            var color = "3px solid #4e917c";
            case1.style.outline = color;
            case2.style.outline = color;
            case3.style.outline = color;
        }
        function verifGagne(){
            var allBox = document.getElementsByClassName('case')

            if(boxList[0] == boxList[1] && boxList[1] == boxList[2] && boxList[0] !== '' && boxList[1] !== '' && boxList[2] !== ''){
                win = boxList[0]
                caseColor(allBox[0], allBox[1], allBox[2])
                checkWin()
            }
            else if(boxList[3] == boxList[4] && boxList[4] == boxList[5] && boxList[3] !== '' && boxList[4] !== '' && boxList[5] !== ''){
                win = boxList[3]
                caseColor(allBox[3], allBox[4], allBox[5])
                checkWin()
            }
            else if(boxList[6] == boxList[7] && boxList[7] == boxList[8] && boxList[6] !== '' && boxList[7] !== '' && boxList[8] !== ''){
                win = boxList[6]
                caseColor(allBox[6], allBox[7], allBox[8])
                checkWin()
            }
            else if(boxList[0] == boxList[3] && boxList[3] == boxList[6] && boxList[0] !== '' && boxList[3] !== '' && boxList[6] !== ''){
                win = boxList[0]
                caseColor(allBox[0], allBox[3], allBox[6])
                checkWin()
            }
            else if(boxList[1] == boxList[4] && boxList[4] == boxList[7] && boxList[1] !== '' && boxList[4] !== '' && boxList[7] !== ''){
                win = boxList[1]
                caseColor(allBox[1], allBox[4], allBox[7])
                checkWin()
            }
            else if(boxList[2] == boxList[5] && boxList[5] == boxList[8] && boxList[2] !== '' && boxList[5] !== '' && boxList[8] !== ''){
                win = boxList[2]
                caseColor(allBox[2], allBox[5], allBox[8])
                checkWin()
            }
            else if(boxList[0] == boxList[4] && boxList[4] == boxList[8] && boxList[0] !== '' && boxList[4] !== '' && boxList[8] !== ''){
                win = boxList[0]
                caseColor(allBox[0], allBox[4], allBox[8])
                checkWin()
            }
            else if(boxList[2] == boxList[4] && boxList[4] == boxList[6] && boxList[2] !== '' && boxList[4] !== '' && boxList[6] !== ''){
                win = boxList[2]
                caseColor(allBox[2], allBox[4], allBox[6])
                checkWin()
            }
        }
            

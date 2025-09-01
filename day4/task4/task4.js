function stattime(){

 
    var startb
    = document.getElementById("startbtn"
        );
    var stopb= document.getElementById("stopbtn"
    );
    var resetb= document.getElementById("resetbtn"
        );
    var timeShow = document.getElementById("timeShow");

    var startT=0; 
    var diff=0; 
    var uptdT=0; 
    var run=false; 
    var input;

    startb.onclick = function(){
        if(run==false){  
            startT = new Date().getTime() - diff; 
          input = setInterval(function(){ 
                uptdT = new Date().getTime() - startT;

                var hh = Math.floor(uptdT / (1000*60*60));
                var mm = Math.floor((uptdT % (1000*60*60)) / (1000*60));
                var ss = Math.floor((uptdT % (1000*60)) / 1000);
                var ms = uptdT % 1000;

                if(hh<10){hh="0"+hh}
                if(mm<10){mm="0"+mm}
                if(ss<10){ss="0"+ss}
                if(ms<10){ms="00"+ms}else if(ms<100){ms="0"+ms}

                timeShow.innerHTML = hh+" : "+mm+" : "+ss+" : "+ms;
            }, 1);
            run=true;
        }
    }


    stopb.onclick = function(){
        if(run==true){
            clearInterval(input);
            diff = new Date().getTime() - startT;
            run=false;
        }
    }


    resetb.onclick = function(){
        clearInterval(input);
        timeShow.innerHTML = "00 : 00 : 00 : 000";
        run=false;
        diff=0;
    }
}

stattime();

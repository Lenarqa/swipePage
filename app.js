var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');

var startX;

// page 1
function p1TouchStart(e){
    startX = e.touches[0].clientX; 
}

function p1TouchMove(e){
    var touch = e.touches[0];
    var change = startX - touch.clientX;

    if(change < 0){
        return;
    }

    page1.style.left = -change + 'px'
    page2.style.display = 'block';
    page2.style.left = (screen.width - change) + 'px';
    e.preventDefault();
}

function p1TouchEnd(e){
    var change = startX - e.changedTouches[0].clientX;
    var threeWidth = screen.width / 3;
    if(change < threeWidth){
        page1.style.left = 0;
        page2.style.left = '100%';
        page2.style.display ="none";
    }else{
        page1.style.transition = 'all .3s';
        page2.style.transition = 'all .3s';
        page1.style.left = '-100%';
        page2.style.left = 0;
        page2.style.display = "block";
    } 
}

// page2
function p2TouchStart(e){
    startX = e.touches[0].clientX;
    page1.style.transition = '';
    page2.style.transition = '';
    page1.style.display ="none";
}

function p2TouchMove(e){
    var touch = e.touches[0];
    var change = touch.clientX - startX;

    if(change < 0){
        return;
    }

    page1.style.display = 'block';
    page1.style.left = (change - screen.width) + 'px';
    page2.style.left = change + 'px'
    e.preventDefault();
}

function p2TouchEnd(e){
    var change = e.changedTouches[0].clientX - startX;
    var fourWidth = screen.width / 4;
    if(change < fourWidth){
        page1.style.left = '-100%';
        page1.style.display ="none";
        page2.style.left = '0';
    }else{
        page1.style.transition = 'all .3s';
        page2.style.transition = 'all .3s';
        page1.style.left = '0';
        page2.style.left = '100%';
    } 
}
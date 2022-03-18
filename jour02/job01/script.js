'use strict';

document.addEventListener('DOMContentLoaded',function loaded(){


    document.getElementById('button').onclick = function citation(){
        let text = document.getElementById('citation').textContent;
    
        console.log(text);
    }


});


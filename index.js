let m1 = document.getElementById('m1');
let m2 = document.getElementById('m2');
let m3 = document.getElementById('m3');

let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');


class River1{
    
}



$(document).ready(function(){
    $('#start').click(function(){

        let boat = $('#boat');

        setTimeout(function(){
            boat.animate({left:'900px'}, 'slow');
            $('#m1').animate({left:'1000px'}, 'slow');
            $('#c1').animate({left:'1000px'}, 'slow');
        }, 1000);

        
        setTimeout(function(){
            boat.animate({left:'0px'}, 'slow');
            $('#m1').animate({left:'0px'}, 'slow');
        }, 3000);


        setTimeout(function(){
            boat.animate({left:'900px'}, 'slow');
            $('#c2').animate({left:'1000px'}, 'slow');
            $('#c3').animate({left:'1000px'}, 'slow');
        }, 5000);
        

        setTimeout(function(){
            boat.animate({left:'0px'}, 'slow');
            $('#c3').animate({left:'0px'}, 'slow');
        }, 7000);

        
        setTimeout(function(){
            boat.animate({left:'900px'}, 'slow');
            $('#m2').animate({left:'1000px'}, 'slow');
            $('#m3').animate({left:'1000px'}, 'slow');
        }, 9000);

        
        setTimeout(function(){
            boat.animate({left:'0px'}, 'slow');
            $('#m3').animate({left:'0px'}, 'slow');
            $('#c2').animate({left:'0px'}, 'slow');
        }, 11000);


        setTimeout(function(){
            boat.animate({left:'900px'}, 'slow');
            $('#m1').animate({left:'1000px'}, 'slow');
            $('#m3').animate({left:'1000px'}, 'slow');
        }, 13000);


        setTimeout(function(){
            boat.animate({left:'0px'}, 'slow');
            $('#c1').animate({left:'0px'}, 'slow');
        }, 15000);


        setTimeout(function(){
            boat.animate({left:'900px'}, 'slow');
            $('#c1').animate({left:'1000px'}, 'slow');
            $('#c2').animate({left:'1000px'}, 'slow');
        }, 17000);


        setTimeout(function(){
            boat.animate({left:'0px'}, 'slow');
            $('#c2').animate({left:'0px'}, 'slow');
        }, 19000);


        setTimeout(function(){
            boat.animate({left:'900px'}, 'slow');
            $('#c2').animate({left:'1000px'}, 'slow');
            $('#c3').animate({left:'1000px'}, 'slow');
        }, 21000);

        






    });
});
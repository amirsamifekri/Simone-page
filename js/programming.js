let myoffset = $('.about').offset().top;
let mynavbarheight = $('.navbar').outerHeight();

$(window).scroll(function(){

if($(window).scrollTop() > myoffset - mynavbarheight ){

    $('.navbar').css('backgroundColor' , "rgba(0,0,0,0.7)")
    $('.arrowup').fadeIn(500).css("display" , "flex")
}


else {
    $('.navbar').css('backgroundColor' , "transparent")
    $('.arrowup').fadeOut(500)
}


})


$('.arrowup ').click(function(){
    $("body , html").animate({scrollTop: 0} , 2000)
})

// caret mark  , regular expression  => regax 

$('.linkshome a[href ^="#"]').click(function(){

    let hrefElement =  $(this).attr("href");
    let currentSection = $(hrefElement).offset().top;
    // console.log("Hello");
    $("html , body").animate({scrollTop: currentSection} , 2000)

})


// $(window).load(function(){
//     $('.loadScreen').css("display" , "none")
// })

// window.addEventListener("load" , function(){

//     $('.loadingScreen').fadeOut(2000  ,  function(){$(document.body).css("overflowY" , "visible")})

// })


// $(window).load()
// $(document).ready()         is better than previous code 


$(document).ready(function(){
    $('.loadingScreen').fadeOut(2000  ,  function(){$(document.body).css("overflowY" , "visible")});


$('.innercolor span').eq(0).css("backgroundColor" , "red");
$('.innercolor span').eq(1).css("backgroundColor" , "blue");
$('.innercolor span').eq(2).css("backgroundColor" , "purple");
$('.innercolor span').eq(3).css("backgroundColor" , "green");
$('.innercolor span').eq(4).css("backgroundColor" , "orange");




$('.innercolor span').click(function(){
    
    let currentColor = $(this).css("backgroundColor") ;
    $('*').css("color" , currentColor)
    
})



let boxWidth = $('.coloringBox').innerWidth();

$('.innercolor i').click(function(){

    if($('.coloringBox').css("left") == "0px"){
        $('.coloringBox').animate({left: -boxWidth} , 1000)
    }
    else{
        $('.coloringBox').animate({left: "0px"} , 1000)
    }


})












})


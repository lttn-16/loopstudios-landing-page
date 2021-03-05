const images_desktop = [
    {
        key:1,
        src:"./images/desktop/image-deep-earth.jpg",
        content:"DEEP EARTH"
    },
    {
        key:2,
        src:"./images/desktop/image-night-arcade.jpg",
        content:"NIGHT ARCADE"
    },
    {
        key:3,
        src:"./images/desktop/image-soccer-team.jpg",
        content:"SOCCER TEAM VR"
    },{
        key:4,
        src:"./images/desktop/image-grid.jpg",
        content:"THE GRID"
    },{
        key:5,
        src:"./images/desktop/image-from-above.jpg",
        content:"FROM UP ABOUT VR"
    }
    ,{
        key:6,
        src:"./images/desktop/image-pocket-borealis.jpg",
        content:"POCKET BOREALIS"
    }
    ,{
        key:7,
        src:"./images/desktop/image-curiosity.jpg",
        content:"THE CURIOSITY"
    },{
        key:8,
        src:"./images/desktop/image-fisheye.jpg",
        content:"MAKE IT FISHEYE"
    }
    
];

const images_mobile = [
    {
        key:1,
        src:"./images/mobile/image-deep-earth.jpg",
        content:"DEEP EARTH"
    },
    {
        key:2,
        src:"./images/mobile/image-night-arcade.jpg",
        content:"NIGHT ARCADE"
    },
    {
        key:3,
        src:"./images/mobile/image-soccer-team.jpg",
        content:"SOCCER TEAM VR"
    },{
        key:4,
        src:"./images/mobile/image-grid.jpg",
        content:"THE GRID"
    },{
        key:5,
        src:"./images/mobile/image-from-above.jpg",
        content:"FROM UP ABOUT VR"
    }
    ,{
        key:6,
        src:"./images/mobile/image-pocket-borealis.jpg",
        content:"POCKET BOREALIS"
    }
    ,{
        key:7,
        src:"./images/mobile/image-curiosity.jpg",
        content:"THE CURIOSITY"
    },{
        key:8,
        src:"./images/mobile/image-fisheye.jpg",
        content:"MAKE IT FISHEYE"
    }
    
]


//change multiple images when responsive
$(window).resize(function(){
    if($(window).width() < 800) {
      $(".change").each(function(index, element) {
            images_mobile.forEach(function(image, indexx){
                if(index === indexx){
                    $(element).attr("src", image.src);
                }
            })
        });
        $(".heading").css("background-image", "url(./images/mobile/image-hero.jpg)");
        } else if ($(window).width() >= 800) {
                 $(".change").each(function(index, element) {
                    images_desktop.forEach(function(image, indexx){
                        if(index === indexx){
                            $(element).attr("src", image.src);
                        }
                    })
            }); 
            $(".heading").css("background-image", "url(./images/desktop/image-hero.jpg)");                       
     }         
});

const src1="./images/icon-hamburger.svg";
const src2="./images/icon-close.svg";

$(".heading__hamburgerIcon").on('click', function(){
    $(".navbar").toggleClass("showing");
    $(".heading__logo").toggleClass("margin");
    $(".heading__nav").toggleClass("background");
    var src = $('.hamburgerIcon').attr('src'); 
        if(src == src1){
            $('.hamburgerIcon').attr('src',src2);
        }
        else{
            $('.hamburgerIcon').attr('src',src1);
    }
});


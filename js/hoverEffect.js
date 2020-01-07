// -------------------  TOOLTIP HOVER -------------------

  $('.TOOLTIP1').click(function() {
    
    var clicks = $(this).data('clicks');
    if (clicks) {
       // Second click title appears
       $('path, circle', "#text_1").css('fill', 'white');


       // Second click description/info box disappears
       $("rect, text", ".DescriptionBox1").css({
        "display": "none",
        "opacity" : "0",
        "animation": "Disappear 1s ease-in-out"
    });
       
       
       

    } else {
        // First click title disappears
        $('path, circle', "#text_1").css({
            "fill": "black",
            "transition" :"all 1s ease-in-out"
            });

        //First click description/info box appears    
        $("text", ".DescriptionBox1").css({
            "display": "block",
            "opacity" : "1",
            "animation": "Opacity 1s ease-in-out" 
        });        
    }
    $(this).data("clicks", !clicks);
  });




  // -------------------  SOURCE FOOTER HOVER -------------------

  $('.sources_footer').click(function() {
    
    var clicks = $(this).data('clicks');
    if (clicks) {
       // Second click title appears
    //    $('path, circle', "#text_1").css('fill', 'white');


       // Second click description/info box disappears
       $('text, rect', ".SourceBox").css({
        "display": "none",
        "opacity" : "0",
        "animation": "Disappear 1s ease-in-out"
    });
       
       
       

    } else {
        // First click title disappears
        // $('path, circle', "#text_1").css({
        //     "fill": "black",
        //     "transition" :"all 2s ease-in-out"
        //     });

        //First click description/info box appears    
        $("text, rect", ".SourceBox").css({
            "display": "block",
            "opacity" : "1",
            "animation": "Opacity 1s ease-in-out" 
        });        
    }
    $(this).data("clicks", !clicks);
  });





  $('.info_footer').click(function() {
    
    var clicks = $(this).data('clicks');
    if (clicks) {
       // Second click title appears
    //    $('path, circle', "#text_1").css('fill', 'white');


       // Second click description/info box disappears
       $('text, rect', ".InfoBox").css({
        "display": "none",
        "opacity" : "0",
        "animation": "Disappear 1s ease-in-out"
    });
       
       
       

    } else {
        // First click title disappears
        // $('path, circle', "#text_1").css({
        //     "fill": "black",
        //     "transition" :"all 2s ease-in-out"
        //     });

        //First click description/info box appears    
        $("text, rect", ".InfoBox").css({
            "display": "block",
            "opacity" : "1",
            "animation": "Opacity 1s ease-in-out" 
        });        
    }
    $(this).data("clicks", !clicks);
  });






// ------------------- EXTINCTION FACTS HOVER -------------------

$(function() {
    $(".hoverEvent")
    .mouseenter(function(){
        $(this).siblings(".species").css({
        "opacity": "0",
        "transition" :"all 0s ease-in-out"
        });
        $(this).siblings(".speciesFactReveal").css({
        "opacity": "1",
        "transition" :"all 0s ease-in-out"
        });
      })
    .mouseleave(function(){
      $(this).siblings(".species").css({
        "opacity": "1",
        "transition" :"all 0s ease-in-out"
        });
        $(this).siblings(".speciesFactReveal").css({
        "opacity": "0",
        "transition" :"all 0s ease-in-out"
        });
    });
  });



// ------------------- Fish Lign HOVER -------------------

$(function() {
    $(".Cepha")
    .mouseenter(function(){
        $(this).siblings(".Event").css({
        "opacity": "1",
        "transition" :"all linear 3s ease-in"
        });
      })
    .mouseleave(function(){
  
        $(this).siblings(".Event").css({
        "opacity": "0",
        "transition" :"all 0s ease-in-out"
        });
    });
  });

// ------------------- Forest Lign HOVER -------------------

$(function() {
    $(".ceph")
    .mouseenter(function(){
        $(this).siblings(".Eventt").css({
        "opacity": "1",
        "transition" :"all linear 3s ease-in"
        });
      })
    .mouseleave(function(){
  
        $(this).siblings(".Eventt").css({
        "opacity": "0",
        "transition" :"all 0s ease-in-out"
        });
    });
  });





// ------------------- SCROLL HOVER -------------------

// 1  
$(function() {
    $("#agriculture")
    .mouseenter(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css({
        "opacity": "0.1",
        "transition" :"all 1s ease-in-out"
        })
        ;})
    .mouseleave(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css('opacity', '1')
    });
});
// 2 
$(function() {
    $("#marine")
    .mouseenter(function(){
        $('polygon, text', "#agriculture, #co2, #forest, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css({
        "opacity": "0.1",
        "transition" :"all 1s ease-in-out"
        })
        ;})
    .mouseleave(function(){
        $('polygon, text', "#agriculture, #co2, #forest, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css('opacity', '1')
    });
});
// 3
$(function() {
    $("#co2")
    .mouseenter(function(){
        $('polygon, text', "#marine, #agriculture, #forest, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css({
        "opacity": "0.1",
        "transition" :"all 1s ease-in-out"
        })
        ;})
    .mouseleave(function(){
        $('polygon, text', "#marine, #agriculture, #forest, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css('opacity', '1')
    });
}); 
// 4       
$(function() {
    $("#forest")
    .mouseenter(function(){
        $('polygon, text', "#marine, #co2, #agriculture, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css({
        "opacity": "0.1",
        "transition" :"all 1s ease-in-out"
        })
        ;})
    .mouseleave(function(){
        $('polygon, text', "#marine, #co2, #agriculture, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css('opacity', '1')
    });
});
// 5       
$(function() {
    $("#mushroom")
    .mouseenter(function(){
        $('polygon, text', "#marine, #co2, #forest, #agriculture, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css({
        "opacity": "0.1",
        "transition" :"all 1s ease-in-out"
        })
        ;})
    .mouseleave(function(){
        $('polygon, text', "#marine, #co2, #forest, #agriculture, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css('opacity', '1')
    });
});
// 6      
$(function() {
    $("#pelagic_fish")
    .mouseenter(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #agriculture, #plastic, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css({
        "opacity": "0.1",
        "transition" :"all 1s ease-in-out"
        })
        ;})
    .mouseleave(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #agriculture, #plastic, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css('opacity', '1')
    });
});          
// 7       
$(function() {
    $("#plastic")
    .mouseenter(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #pelagic_fish, #agriculture, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css({
        "opacity": "0.1",
        "transition" :"all 1s ease-in-out"
        })
        ;})
    .mouseleave(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #pelagic_fish, #agriculture, #fresh_water_fish, #flowering_plants, #population, #ocean_temperature").css('opacity', '1')
    });
});
// 8      
$(function() {
    $("#fresh_water_fish")
    .mouseenter(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #pelagic_fish, #plastic, #agriculture, #flowering_plants, #population, #ocean_temperature").css({
        "opacity": "0.1",
        "transition" :"all 1s ease-in-out"
        })
        ;})
    .mouseleave(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #pelagic_fish, #plastic, #agriculture, #flowering_plants, #population, #ocean_temperature").css('opacity', '1')
    });
});
// 9       
$(function() {
    $("#flowering_plants")
    .mouseenter(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #agriculture, #population, #ocean_temperature").css({
        "opacity": "0.1",
        "transition" :"all 1s ease-in-out"
        })
        ;})
    .mouseleave(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #agriculture, #population, #ocean_temperature").css('opacity', '1')
    });
});
// 10       
$(function() {
    $("#population")
    .mouseenter(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #agriculture, #ocean_temperature").css({
        "opacity": "0.1",
        "transition" :"all 1s ease-in-out"
        })
        ;})
    .mouseleave(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #agriculture, #ocean_temperature").css('opacity', '1')
    });
}); 
// 11      
$(function() {
    $("#ocean_temperature")
    .mouseenter(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #population, #agriculture").css({
        "opacity": "0.1",
        "transition" :"all 1s ease-in-out"
        })
        ;})
    .mouseleave(function(){
        $('polygon, text', "#marine, #co2, #forest, #mushroom, #pelagic_fish, #plastic, #fresh_water_fish, #flowering_plants, #population, #agriculture").css('opacity', '1')
    });
}); 
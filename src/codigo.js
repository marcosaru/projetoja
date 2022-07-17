$('#log').hide()
$(document).ready(function(){
    $('#menuLogar').on({
       mouseenter: function (){$('#log').show(800)},
       click: function() {$('#log').toggle(800)}
        
    })
   
            $('.carrossel').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
            })
            $('.off').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true
            })
           
            
            
              
});
$(window).ready(function() {
       $('.main_btna').on('click', function() {
              $('.overlay').show(500, function() {
                     $('.modal').slideDown(1000);
              });    
       });
       $('.main_btn').on('click', function() {
              $('.overlay').show(500, function() {
                     $('.modal').slideDown(1000);
              });    
       });
       $('nav ul li:eq(1)').on('click', function() {
              $('.overlay').show(500, function() {
                     $('.modal').slideDown(1000);
              });    
       });
       $('.close').on('click', function() {
              $('.modal').slideUp(500, function() {
                     $('.overlay').hide(1000);
              });    
       });   
});
    



 $(function(){
    khoimonan = $('.nhieumon').isotope({
        // options
        itemSelector: '.motmon',
        layoutMode: 'masonry'
      });

      // layout Isotope after each image loads
      khoimonan.imagesLoaded().progress( function() {
        khoimonan.isotope('layout');
      });
      
      $('.tieudect a').click(function() {
          dulieu = $(this).data('monan'); //Lay du lieu ve, data-monan: truyen du lieu
       //  console.log(dulieu);

        khoimonan.isotope({ filter: dulieu });

        return false;
      });
})  
 
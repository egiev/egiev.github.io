$(() => {
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
    
        e.preventDefault();
    
        // top position relative to the document
        var pos = $id.offset().top;
    
        // animated top scrolling
        $('body, html').animate({scrollTop: pos});

        // add active class
        $('nav ul li.active').removeClass('active');
        $(this).parent().addClass('active');
    });

    const ageElement = $('#age')
    const getAge = Math.floor((new Date() - new Date('1993-04-23').getTime()) / 3.15576e+10)

    ageElement.html(getAge)
})
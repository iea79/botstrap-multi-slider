function initSlider(slider, columns, columnsTabletHorizontal, columnsTablet, columnsMobile, columnsXs) {
    let items = $(slider + ' .carousel-item'),
        itemsTotal = items.length,
        windowWidth = $(window).width(),
        resized = false,
        visible,
        slideDirection,
        slideCount,
        currentSlide = 0,
        xsWidth = 480,
        mobileWidth = 767,
        tabletWidth = 991,
        tabletHorizontalWidth = 1199;


    if (!columns) {
        slideCount = 1;
    } else {
        renderColumns();
        renderDots();
    }

    if (itemsTotal < slideCount) {
        $(slider + ' .carousel-control').hide();
        $(slider + ' .carousel-indicators').hide();
    }

    $(slider).on('slid.bs.carousel', function (e) {
        let item = $(e.relatedTarget);
        let index = item.index();
        let itemsCount = slideCount;

        slideDirection = e.direction;
        currentSlide = e.to;

        if (currentSlide === 0) {
            $(slider + ' .carousel-control-prev').attr('disabled', true);
        } else {
            $(slider + ' .carousel-control-prev').attr('disabled', false);
        }
        if (currentSlide === (itemsTotal - slideCount)) {
            $(slider + ' .carousel-control-next').attr('disabled', true);
        } else {
            $(slider + ' .carousel-control-next').attr('disabled', false);
        }
        renderVisibleSlide();

    });

    $(slider + ' .carousel-control').on('click', function(e) {
        if ($(this).attr('disabled') || $(this).hasClass('disabled')) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            renderDots();
        }
    });

    $(slider + ' .carousel-indicators li').on('click', function() {
        if ($(this).hasClass('disabled') || $(this).hasClass('active') ) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        // Fix direction after click
        if ($(this).index() > currentSlide) {
            slideDirection = 'left';
        } else {
            slideDirection = 'right';
        }
        renderVisibleSlide();
        renderDots();

    });

    $(window).resize(function(event) {
        windowWidth = $(window).width();
        if (resized == windowWidth) { return; }
        resized = windowWidth;

        renderColumns();
        renderDots();
    });

    function renderVisibleSlide() {
        items = $(slider + ' .carousel-item');
        visible = 0;

        items.removeClass('carousel-item-visible col col-12 col-4 col-2 col-3 col-6');

        items.each(function(index, el) {

            if ($(el).index() >= currentSlide && $(el).index() < (currentSlide + slideCount)) {
                $(el).addClass('carousel-item-visible col-' + (12/slideCount) + '');
                animatePrevNextSlide(slideDirection, el);
            }
        });
    };

    function renderDots() {
        $(slider + ' .carousel-indicators li').removeClass('siblings');
        $(slider + ' .carousel-indicators li').each(function(index, el) {
            if (index > (itemsTotal - slideCount)) {
                $(el).hide();
            } else {
                $(el).show();
            }
        });
        setTimeout(function () {
            $(slider + ' .carousel-indicators li.active').next().addClass('siblings');
            $(slider + ' .carousel-indicators li.active').prev().addClass('siblings');
        }, 150);
    }

    function renderColumns() {
        slideCount = columns;
        if (columnsTabletHorizontal && windowWidth < tabletHorizontalWidth) {
            slideCount = columnsTabletHorizontal;
        }
        if (columnsTablet && windowWidth < tabletWidth) {
            slideCount = columnsTablet;
        }
        if (columnsMobile && windowWidth < mobileWidth) {
            slideCount = columnsMobile;
        }
        if (columnsXs && windowWidth < xsWidth) {
            slideCount = columnsXs;
        }
        renderVisibleSlide();
    }

    function animatePrevNextSlide(slideDirection, el) {
        switch (slideDirection) {
            case 'left':
                $(el).addClass('carousel-item-animate-next');
                break;
            case 'right':
                $(el).addClass('carousel-item-animate-prev');
                break;
            default:
        }
        $(slider + ' .carousel-control').addClass('disabled');
        $(slider + ' .carousel-indicators li').addClass('disabled');
        setTimeout(function () {
            items.removeClass('carousel-item-animate-next carousel-item-animate-prev')
            $(slider + ' .carousel-control').removeClass('disabled');
            $(slider + ' .carousel-indicators li').removeClass('disabled');
        }, 500);
    }
}

initSlider('#carousel', 4, 3, 2, 2, 1);
initSlider('#carousel2', 4, 3, 3, 2, 1);
initSlider('#carousel3', 4, 3, 3, 2, 1);
initSlider('#carousel-img', 2, 1);
initSlider('#carousel-home', 2, 1);

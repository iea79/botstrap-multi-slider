function initSlider(i,s,a,l,o,t){let c,r,n,d=$(i+" .carousel-item"),u=d.length,h=$(window).width(),m=!1,v=0;function b(){d=$(i+" .carousel-item"),c=0,d.removeClass("carousel-item-visible col col-12 col-4 col-2 col-3 col-6"),d.each((function(e,s){$(s).index()>=v&&$(s).index()<v+n&&($(s).addClass("carousel-item-visible col-"+12/n),function(e,s){switch(e){case"left":$(s).addClass("carousel-item-animate-next");break;case"right":$(s).addClass("carousel-item-animate-prev")}$(i+" .carousel-control").addClass("disabled"),$(i+" .carousel-indicators li").addClass("disabled"),setTimeout((function(){d.removeClass("carousel-item-animate-next carousel-item-animate-prev"),$(i+" .carousel-control").removeClass("disabled"),$(i+" .carousel-indicators li").removeClass("disabled")}),500)}(r,s))}))}function f(){$(i+" .carousel-indicators li").removeClass("siblings"),$(i+" .carousel-indicators li").each((function(i,e){i>u-n?$(e).hide():$(e).show(),$(e).hasClass("active")})),setTimeout((function(){$(i+" .carousel-indicators li.active").next().addClass("siblings"),$(i+" .carousel-indicators li.active").prev().addClass("siblings")}),150)}function C(){n=s,a&&h<1199&&(n=a),l&&h<991&&(n=l),o&&h<767&&(n=o),t&&h<480&&(n=t),b()}s?(C(),f()):n=1,u<n&&($(i+" .carousel-control").hide(),$(i+" .carousel-indicators").hide()),$(window).resize((function(i){h=$(window).width(),m!=h&&(m=h,C(),f())})),$(i).on("slid.bs.carousel",(function(e){$(e.relatedTarget).index();r=e.direction,v=e.to,0===v?$(i+" .carousel-control-prev").attr("disabled",!0):$(i+" .carousel-control-prev").attr("disabled",!1),v===u-n?$(i+" .carousel-control-next").attr("disabled",!0):$(i+" .carousel-control-next").attr("disabled",!1),b()})),$(i+" .carousel-control").on("click",(function(i){$(this).attr("disabled")||$(this).hasClass("disabled")?(i.preventDefault(),i.stopPropagation()):f()})),$(i+" .carousel-indicators li").on("click",(function(){if($(this).hasClass("disabled")||$(this).hasClass("active"))return e.preventDefault(),void e.stopPropagation();r=$(this).index()>v?"left":"right",b(),f()}))}initSlider("#carousel",4,3,2,2,1),initSlider("#carousel2",4,3,3,2,1),initSlider("#carousel3",4,3,3,2,1),initSlider("#carousel-img",2,1),initSlider("#carousel-home",2,1);
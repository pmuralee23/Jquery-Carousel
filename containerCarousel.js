function containerCarousel() {
    this.init = function (container, context) {

        var arrDivs = [],
            arrTitles = [],
            displayPix = 10;
        $(container + '>div', context).css({
            'display': 'none'
        });
        $.each($(container + '>div', context), function (index, value) {
            arrDivs.push($(this).attr("id"));
            arrTitles.push($(this).data("title"));
        });

        var currentDiv = arrDivs[0];
        var totalSlides = arrDivs.length,
            $back = $("#back", context),
            $next = $("#next", context);

        $back.addClass("carousel-prev");
        $next.addClass("carousel-next");

        $("#" + currentDiv, context).fadeIn();

        if (totalSlides > 2) {
            $back.text(arrTitles[arrTitles.length - 1]).show();
            $next.text(arrTitles[1]).show();
        } else if (totalSlides == 2) {
            $back.hide();
            $next.text(arrTitles[1]).show();
        } else if (totalSlides == 1) {
            //$("#widget-franchise-smartchart .nav").hide();
            $back.hide();
            $next.hide();
            $back.parents("#widget-franchise-smartchart .nav").css('height', '3px');
        }

        

        $(".nav", context).on("click", function (event) {
            event.preventDefault();
            var id = event.target.id,
                back, next;
            if (id == "next") {
                $("#" + currentDiv, context).hide();
                var nextId = $("#" + currentDiv, context).next().attr('id');
                if (nextId !== "" && typeof (nextId) != "undefined") {
                    nextId = $("#" + currentDiv, context).next().attr('id');
                } else {
                    nextId = arrDivs[0];
                }
                $("#" + nextId, context).show();
                currentDiv = nextId;
                back = $("#" + currentDiv, context).prev().data("title") || arrTitles[arrTitles.length - 1];
                next = $("#" + currentDiv, context).next().data("title") || arrTitles[0];

                $back.text(back);
                $next.text(next);
            } else if (id == "back") {
                $("#" + currentDiv, context).hide();
                var prevId = $("#" + currentDiv, context).prev().attr('id');;
                if (prevId !== "" && typeof (prevId) != "undefined") {
                    prevId = $("#" + currentDiv, context).prev().attr('id');
                } else {
                    prevId = arrDivs[arrDivs.length - 1];
                }

                $("#" + prevId, context).show();
                currentDiv = prevId;

                back = $("#" + currentDiv, context).prev().data("title") || arrTitles[arrTitles.length - 1];
                next = $("#" + currentDiv, context).next().data("title") || arrTitles[0];

                $back.text(back);
                $next.text(next);

            }
        });
    }
}

$(document).ready(function() {
    let $window = $(window);
    $window.scroll(function() {

        // quando scrolla, cambia la posizione del header di modo che rimanga sempre in alto visibile
        // Cambio inoltre gli stili in modo appropriato per assomigliare al sito
        let $headerFixed = $(".header-container-fixed");
        let $navHeader = $(".header-nav-buttons-container");
        let $trendingHeader = $(".header-trending-bar-container");
        let $img = $("#news-logo");
        if ($window.scrollTop() > 80) {
            $img.css("visibility", "visible");

            $navHeader.css("display", "none");
            $trendingHeader.css("display", "none");

            $headerFixed.css("position", "fixed");
            $headerFixed.css({
                "border-bottom":"1px solid black",
                "box-shadow": "0 5px 5px rgba(0, 0, 0, 0.5)"
            });


        } else {
            if($window.width() >= 1040) {
                $img.css("visibility", "hidden");
            }


            $navHeader.css("display", "flex");
            $trendingHeader.css("display", "flex");

            $headerFixed.css("position", "static");
            $headerFixed.css({
                "border-bottom":"none",
                "box-shadow": "none"
            });
        }

    });

    // Questa funzione mi serve perché c'era un bug quando facevo un resize dopo aver scrollato
    $window.resize(function() {
        let $img = $("#news-logo");
        if($window.width() > 1040) {
            $img.css("visibility", "hidden");
        } else {
            $img.css("visibility", "visible");
        }
    });
});
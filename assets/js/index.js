$(document).ready(function (e) {


    $(".navbar-toggler").click(function (event) {
        $("#navbarSupportedContent").toggle("show")
        $(".close-btn").css("display","block")
    })

    $(".close-btn").click(function (event) {
        $("#navbarSupportedContent").toggle("show")
        $(".close-btn").css("display","none")
    })

})
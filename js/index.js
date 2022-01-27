// Hamburger function
$(".header__hamburger").click(function() {
    $(".header__nav").addClass("change-opacity");
    $(".header__nav").addClass("change-gradient");
    $(".header__nav-list").addClass("change-margin");
    $(".header__nav-close-icon").addClass("change-margin");
    $(".header__nav").addClass("change-z-index");
})

$(".header__nav-close-icon").click(function() {
    $(".header__nav").removeClass("change-opacity");
    $(".header__nav").removeClass("change-gradient");
    $(".header__nav-list").removeClass("change-margin");
    $(".header__nav-close-icon").removeClass("change-margin");
    $(".header__nav").removeClass("change-z-index");
})

var cartNumber = 0;

$(".product__amount").text(cartNumber);
// Cart function
function decreaseCart() {
    if ( cartNumber > 0 ){
        cartNumber--;
        $(".product__amount").text(cartNumber);
    } else {
        null;
    }
}

function increaseCart() {
    cartNumber++;
    $(".product__amount").text(cartNumber);
}

var cartItems = 0;

$(".cart__items-number").text(cartItems);


function addToCartNumber() {
    cartItems += cartNumber;
    cartNumber = 0;
    $(".product__amount").text(cartNumber);
    $(".cart__items-number").text(cartItems);
    $(".cart__product-count").text("" + cartItems);
    $(".cart__product-final-price").text("$" + cartItems*125 + ".00");

    if (cartItems == 0 ){
        $(".cart__items-number").css("display", "none");
        $(".cart__filled").css("display", "none");
        $(".cart__empty").css("display", "block"); 
    } else {
        $(".cart__items-number").css("display", "inline-block");
        $(".cart__filled").css("display", "flex");
        $(".cart__empty").css("display", "none"); 
    }
}

$(".cart__icon").click(function() {
    $(".cart__details").toggleClass("change-position");
})

$(".cart__items-number").css("display", "none");
$(".cart__filled").css("display", "none");
$(".cart__empty").css("display", "block"); 

function deleteCartItem(){
    cartItems = 0;
    $(".cart__items-number").css("display", "none");
    $(".cart__filled").css("display", "none");
    $(".cart__empty").css("display", "block");
}


// Carousel function 

function nextImage(){
    const altName = $(".product__picture-current").attr("alt");
    const productNumber = Number(altName.substr(-1));
    if ( productNumber !== 4 ){
        $(".product__picture-current").removeClass("product__picture-current");
        $(".product__picture[alt$='" + (productNumber + 1) + "']").addClass("product__picture-current");
        $(".product__thumbnail[alt$='" + (productNumber + 1) + "']").addClass("product__thumbnail-current");
        $(".product__thumbnail[alt$='" + (productNumber) + "']").removeClass("product__thumbnail-current");
    }
}

function prevImage(){
    const altName = $(".product__picture-current").attr("alt");
    const productNumber = Number(altName.substr(-1));
    if ( productNumber !== 1 ){
        $(".product__picture-current").removeClass("product__picture-current");
        $(".product__picture[alt$='" + (productNumber - 1) + "']").addClass("product__picture-current");
        $(".product__thumbnail[alt$='" + (productNumber - 1) + "']").addClass("product__thumbnail-current");
        $(".product__thumbnail[alt$='" + (productNumber) + "']").removeClass("product__thumbnail-current");

    }
}

$(".product__thumbnail").click(function() {
    const altName = $(this).attr("alt");
    const thumbnailNumber = Number(altName.substr(-1));

    $(".product__thumbnail-current").removeClass("product__thumbnail-current");
    $(".product__thumbnail[alt$='" + (thumbnailNumber) + "']").addClass("product__thumbnail-current");
    $(".product__picture-current").removeClass("product__picture-current");
    $(".product__picture[alt$='" + (thumbnailNumber) + "']").addClass("product__picture-current");
})

$(".product__display").click(function(){
    $(".lightbox").addClass("show-lightbox");
});

$(".lightbox__close-icon").click(function(){
    $(".lightbox").removeClass("show-lightbox");
});

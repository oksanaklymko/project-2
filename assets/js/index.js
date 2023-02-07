let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("googleMap"), {
        center: {lat: 40.6686, lng: -73.8999},
        zoom: 12,
        mapId: '2f084b4895741534',
    });
    const marker = new google.maps.Marker({
        position: {lat: 40.6781, lng: -73.8981},
        map: map,
        title: "Monticello",
        icon: {
            url: "https://i.postimg.cc/30jd33ns/Pin.png",
            scaledSize: new google.maps.Size(100, 100),
        },
    });
}

window.initMap = initMap;

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
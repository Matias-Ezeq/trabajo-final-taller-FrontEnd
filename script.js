function noAd(bool){
    var ad = document.getElementById("ad");
    if (bool){
        ad.style.display = "none";
    }
    else {
        ad.style.display = "block";
    }
}
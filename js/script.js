// event saat link di klik
$(`.page-scroll`).on(`click`, function(e){ 
    // ambil isi href
    var tujuan = $(this).attr(`href`);
    
    //tangkap elemen yang di-klik
    var elementujuan = $(tujuan);

    // pindahkan scroll
    $(`body,html`).animate({
        scrollTop:elementujuan.offset().top - 50
    }, 1100, `easeInOutExpo` );
    
    e.preventDefault();

});
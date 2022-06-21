$(document).ready(function(){

    // JQUERY cần tìm hiểu thêm !!!
    // thực hiện click vào class js-eye
    $('.js-eye').click(function(){
            // thêm class open
            $(this).toggleClass('open');
            // khi click truy cập vào js-eye
            //chirend gọi đến i
            $(this).children('i').toggleClass('ti-close ti-eye');
            if($(this).hasClass('open')){
                // $(this) là $('.js-eye ở trên') prev() class ở trước
                // $(this).prev().attr('type','text')
                // trỏ đến class form-group-password và attr là đổi type thành text trong jquery
                $('.form-group-password').attr('type','text');
            }
            else{
                $('.form-group-password').attr('type','password');
            }
        });
        
});


//element-會員登入燈箱
function $(id){
    return document.getElementById(id);
} 
    // 顯示燈箱
    function showLoginLightbox() {
        $("loginbox").style.display = "block";
        console.log("Clicked");
    }
    
    // 隱藏燈箱
    function closeLoginLightbox() {
        $("loginbox").style.display = "none";
    }
    
    window.addEventListener('click', function(e) {
        var loginLightbox = $('memlogin');
        if (e.target === loginLightbox) {
        closeLoginLightbox();
        }
    });
    $("login").onclick=showLoginLightbox;
    $('mobilelogin').onclick=showLoginLightbox;

        


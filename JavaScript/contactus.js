//contactus-會員登入燈箱
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
    
    // 提交登入表單的處理函式
    function submitLoginForm() {
        // 在這裡添加處理登入的邏輯
        // 例如，檢查使用者名稱和密碼是否正確
        // 如果正確，可以執行其他相關操作，然後關閉燈箱
        // 如果不正確，可以顯示錯誤訊息
        closeLoginLightbox();
    }
    window.addEventListener('click', function(e) {
        var loginLightbox = $('memlogin');
        if (e.target === loginLightbox) {
        closeLoginLightbox();
        }
        var formclosebtn =$('formclose');
        if (e.target === formclosebtn) {
            closeLoginLightbox();
            }
    });
    $("login").onclick=showLoginLightbox;
//-----------------------------------------------
//手機會員登入
function m_showLoginLightbox() {
    $("loginbox").style.display = "block";
    console.log("Clicked");
}

// 隱藏燈箱
function m_closeLoginLightbox() {
    $("loginbox").style.display = "none";
}

// 提交登入表單的處理函式
window.addEventListener('click', function(e) {
    var loginLightbox = $('memlogin');
    if (e.target === loginLightbox) {
    closeLoginLightbox();
    }
    var formclosebtn =$('formclose');
    if (e.target === formclosebtn) {
        closeLoginLightbox();
        }
});
$("mobilelogin").onclick=m_showLoginLightbox;

//點我填寫聯絡表單
    // 顯示燈箱
    function showwrite() {
        $("contactform").style.display = "block";
        console.log("Clicked");
    }
    
    // 隱藏燈箱
    function closewrite() {
        $("contactform").style.display = "none";
    }

    window.addEventListener('click', function(e) {
        var writeLightbox = $('contactform');
        if (e.target === writeLightbox) {
            closewrite();
        }
        var formclosebtn =$('closewrite');
        if (e.target === formclosebtn) {
            closewrite();
            }
    });
    $("writeform").onclick=showwrite;

//送出聯絡表單時的檢查
$("write").onsubmit=function(){
    alert(`已收到您的寶貴留言，樂食團隊會用最快速度處理您的問題。`)
    closewrite();
}




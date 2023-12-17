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

//會員登入驗證碼
            // 生成驗證碼
            let captcha = '';
            function generateCaptcha() {
                let canvas = $('verify-code');
                let context = canvas.getContext('2d');
                let canvasWidth = canvas.width;
                let canvasHeight = canvas.height;
        
                // 定義驗證碼允許的字符
                let captchaText = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz123456789';
                let captchaLength = 4; // 驗證碼長度
                
                // 清除Canvas
                context.clearRect(0, 0, canvasWidth, canvasHeight);
                // 在畫布上繪製驗證碼
                for (let i = 0; i < captchaLength; i++) {
                    let char = captchaText.charAt(Math.floor(Math.random() * captchaText.length));
                    captcha += char;
                    // 隨機顏色
                    let colorR = Math.floor(Math.random() * (180 - 20)) + 20;
                    let colorG = Math.floor(Math.random() * (180 - 20)) + 20;
                    let colorB = Math.floor(Math.random() * (180 - 20)) + 20;
                    // x, y 移動
                    let x = 15 + i * 30;
                    let y = 30 + Math.random() * 10;
                    // 旋轉角度
                    let angle = (Math.random() - 0.5) * 60 * Math.PI / 180; // 轉換為弧度
                    context.save(); // 儲存當前繪圖狀態
                    context.translate(x, y); // 將原點移動到文字位置
                    context.rotate(angle); // 旋轉繪圖環境
                    context.font = 'bold 30px Arial';
                    context.fillStyle = `rgb(${colorR}, ${colorG}, ${colorB})`;
                    context.fillText(char, 0, 0); // 在 (0, 0) 繪製文字
                    context.restore(); // 恢復到原始繪圖狀態，避免旋轉影響其他元素
                    x += 30; // 調整下一個字符的位置
                }
                return captcha;
            }
            generateCaptcha();
            // 重新生成驗證碼
            $("refresh-code").onclick = generateCaptcha;
        


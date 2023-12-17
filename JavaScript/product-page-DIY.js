function $id(id){
    return document.getElementById(id);
} 

//element-會員登入燈箱
    // 顯示燈箱
    function showLoginLightbox() {
        $id("loginbox").style.display = "block";
        console.log("Clicked");
    }
    
    // 隱藏燈箱
    function closeLoginLightbox() {
        $id("loginbox").style.display = "none";
    }
    
    // 提交登入表單的處理函式
    window.addEventListener('click', function(e) {
        var loginLightbox = $id('memlogin');
        if (e.target === loginLightbox) {
        closeLoginLightbox();
        }
        var formclosebtn =$id('formclose');
        if (e.target === formclosebtn) {
            closeLoginLightbox();
            }
    });
    $id("login").onclick=showLoginLightbox;
//會員登入驗證碼
            // 生成驗證碼
            let captcha = '';
            function generateCaptcha() {
                let canvas = $id('verify-code');
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
            $id("refresh-code").onclick = generateCaptcha;
        


//其他推薦商品內容-手機板
$(document).ready(function () {

    let imgCount=$('#content li').length; //品項有幾項
    console.log(imgCount)
    let divwidth=$('#sliderBoard').width();//div的寬度
    for(let i=0;i<imgCount;i++){
        $('#contentButton').append(`<li></li>`)
    }
    $('#contentButton li:first').addClass('clicked')
    // 針對Li的第一個小孩加上class="clicked"

    $('#content li').width(divwidth)         //li的寬  (li的寬跟div一樣)
    $('#content').width(divwidth * imgCount) //ui的寬  (li的寬 * 圖片個數) 

    let index=0
    let timer=setInterval(moveToNext,5000) //計時器，每五秒移動到下一個
    //下面小圓圈圈被按的時候
    $('#contentButton li').click(function(){
        clearInterval(timer) //按下圓圈之後暫停季時器
        index=$(this).index() //告訴我是按到第幾個按鈕(索引值)

        $('#content').animate({
            left:divwidth * index * -1,
        })
        $(this).addClass('clicked') //被按的那個加上.clicked
        $('#contentButton li').not(this).removeClass ('clicked') //其他的除了你以外移除.clicked
        timer=setInterval(moveToNext,5000)//計時器重新計算
    })

    //每五秒往左邊移動->
    //計時器 setInterval(函數,毫秒)，若要暫停=
    //let timer
    //clearInterval(timer)

    function moveToNext(){
        //讓index不要一直加下去，所以要判斷他
        if(index < imgCount-1){
            index++
        }else{
            index=0
        }

        $('#content').animate({
            left:divwidth * index * -1,
        })
        $(`#contentButton li:eq(${index})`).addClass('clicked')
        $('#contentButton li').not(`:eq(${index})`).removeClass ('clicked') 

    }

});


//加入收藏
function addfavorite(){
    let heart = $id('addfavorite');
    if(heart.title === "加入收藏"){ //加入收藏
        console.log(1)
        $id('addfavorite').src="../Images/red-heart.svg";
        heart.title = "取消收藏";
    } else {   //取消收藏     
        heart.src="../Images/product-page-favorite.png";
        heart.title = "加入收藏";
    }

}
$id('addfavorite').onclick=addfavorite;

//點小圖秀大圖(桌機)

function showLarge(e){//e代表事件物件
    let small=e.target; //event.target 屬性是永遠指向觸發事件的 DOM 物件
    document.getElementById("large").src=small.src
}
    
function select(){
    let smalls=document.querySelectorAll(".smallimg img")
    for(let i=0;i<smalls.length;i++){
        smalls[i].onclick = showLarge
    }
}
    
document.getElementById("small").onclick = showLarge
window.addEventListener("load", select, false);


//點小圖秀大圖(手機)
function showLarge(e){//e代表事件物件
    let small=e.target; //event.target 屬性是永遠指向觸發事件的 DOM 物件
    document.getElementById("large").src=small.src
}
    
function choice(){
    let smalls=document.querySelectorAll(".mobile_LtoR img")
    for(let i=0;i<smalls.length;i++){
        smalls[i].onclick = showLarge
    }
}
    
document.getElementById("small").onclick = showLarge
window.addEventListener("load", choice, false);


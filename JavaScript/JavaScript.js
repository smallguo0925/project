// writedata->點信用卡付款才會跑出輸入卡號跟安全碼
    let paymentForm = document.getElementById("payment");
    let creditcardSection = document.querySelector(".creditcard");

    paymentForm.addEventListener("change", function(e) {
        var selectedPayment = e.target.value;

      // 檢查選擇的支付方式
        if (selectedPayment === "creditcard-payment") {
        creditcardSection.style.display = "block"; // 顯示信用卡相關欄位
        } else {
        creditcardSection.style.display = "none"; // 隱藏信用卡相關欄位
        }
    });

// writedata->同訂購人

function setAsbuyer(){
    if (document.getElementById("sameorderman").checked) {
        document.getElementById("recipient-name").value = document.getElementById("orderman-name").value;
        document.getElementById("recipient-email").value = document.getElementById("orderman-email").value;
        document.getElementById("recipient-tel").value = document.getElementById("orderman-tel").value;
    }else{
        document.getElementById("recipient-name").value = ''
        document.getElementById("recipient-email").value = ''
        document.getElementById("recipient-tel").value = ''
    }
}
document.getElementById("sameorderman").onclick=setAsbuyer

// writedata->無優惠碼
document.getElementById("nodiscount").onclick=function(){
    if (document.getElementById("nodiscount").checked) {
        document.getElementById("orderman-discount").disabled=true;
        document.getElementById("orderman-discount").value=`無優惠碼`;
    }else{
        document.getElementById("orderman-discount").disabled=false;
        document.getElementById("orderman-discount").value='';

    }
}
// writedata->配送方式選實體門市取貨，則配送地址更改成門市
document.getElementById("delivery").addEventListener("change", function() {
    if (document.getElementById("delivery").value === '實體門市取件') {
        document.getElementById("delivery-address").value=`樂食門市 - 桃園市中壢區復興路46號`
        document.getElementById("delivery-address").disabled=true;
    } else {
        document.getElementById("delivery-address").value=''; 
    }
});
// writedata->資料必填
window.addEventListener( "load" , function (){
    //------myForm被送出時執行checkForm
    $("myForm").onsubmit = checkForm
});
    function $(id){ 
    return document.getElementById(id); 
    }  

    function checkForm(e){ //??????, 接收事件物件的參考
    //檢查訂購人姓名是否有填寫
    let ordername = $("orderman-name");
    if(ordername.value.length == 0) {
        alert("訂購人姓名為必填");
        ordername.focus();
        //阻止預設行為
        e.preventDefault();  //阻止的同時也讓彈出視窗關閉之後鼠標回到盒子裡
        return;
    }

    //檢查訂購人信箱是否有填寫
    let orderemail = $("orderman-email");
    if(orderemail.value.length == 0) {
        alert("訂購人信箱為必填");
        orderemail.select();
        //阻止預設行為
        e.preventDefault(); 
        return;
    }
    //檢查訂購人電話是否有填寫，且要十碼
    let ordertel = $("orderman-tel");
    if(ordertel.value.length < 10) {
        alert("訂購人手機為十碼，且必填");
        ordertel.select();
        //阻止預設行為
        e.preventDefault(); 
        return;
    }
    //檢查配送方式一定要選
    let delivery = $("delivery");
    if(delivery.selectedIndex === 0) {
        alert("配送方式一定要選");
        //阻止預設行為
        e.preventDefault(); 
        return;
    }
    //檢查付款方式一定要選
    let payments = document.getElementsByName("payment-method");
    
        if(payments[0].checked === false && !payments[1].checked && !payments[2].checked && !payments[3].checked){
            alert("付款方式一定要選");
        //阻止預設行為
        e.preventDefault(); 
        return;
        }
    
}
    window.addEventListener( "load" , function (){
    //------myForm被送出時執行checkForm
    $("myForm").onsubmit = checkForm
    });

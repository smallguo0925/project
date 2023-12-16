function $(id){
    return document.getElementById(id);
} 


//order---> +-盒子
function init(){
	let btnMinus = document.getElementsByClassName("minus");
	let btnPlus = document.getElementsByClassName("plus");
    let qty = document.getElementsByClassName("numberbox");
    for(let i=0 ; i<btnMinus.length;i++){
        //--------------------減
        btnMinus[i].onclick = function(e){
            let qtyobj=qty[i];
            let quantity = parseInt(qtyobj.value);
            if(quantity>0){
                qtyobj.value = quantity -1
                changeprice();
                changeprice1();
                sumprice();
            }
        }
        //--------------------加
        btnPlus[i].onclick = function(e){
            let qtyobj=qty[i];
            let quantity = parseInt(qtyobj.value);
            qtyobj.value = quantity +1
            changeprice();
            changeprice1();
            sumprice();
        }
    }
    
}	
window.addEventListener("load", init, false);	

//改變小計的價格
function changeprice() {
    let num=$('numberbox').value;
    let price=parseInt($('product-price').textContent);
    let total=num*price;
    $('price').innerHTML=total;
    // if (total >= 1000) {
    //     $('price').innerHTML = total.toLocaleString();
    // } else {
    //     $('price').innerHTML = total;
    // }
    
}
window.addEventListener("load", changeprice, false);	
function changeprice1() {
    let num=$('numberbox1').value;
    let price=parseInt($('product-price1').textContent);
    let total=num*price;
    $('price1').innerHTML=total;
    // if (total >= 1000) {
    //     $('price1').innerHTML = total.toLocaleString();
    // } else {
    //     $('price1').innerHTML = total;
    // }
    
}
window.addEventListener("load", changeprice1, false);		



//總計
function sumprice() {
    let priceElement = $('price');
    let price1Element = $('price1');
    let totalPriceElement = $('total-price');

    // 檢查元素是否存在
    if (priceElement && price1Element && totalPriceElement) {
        let p1 = parseInt(priceElement.innerHTML) || 0;
        let p2 = parseInt(price1Element.innerHTML) || 0;
        let prices = p1 + p2;
        totalPriceElement.innerHTML = prices;

        if (prices >= 1000) {
            totalPriceElement.innerHTML = prices.toLocaleString();
        } else {
            totalPriceElement.innerHTML = prices;
        }
    }
}

// function sumprice(){
//     let p1=parseInt($('price').innerHTML) || 0;
//     let p2=parseInt($('price1').innerHTML) || 0;
//     let prices=p1+p2;
//     if(p1===null && p2===null){
//         prices=0;
//     }
//     $('total-price').innerHTML=prices;
//     // if (prices >= 1000) {
//     //     $('total-price').innerHTML = prices.toLocaleString();
//     // } else {
//     //     $('total-price').innerHTML = prices;
//     // }
    
// }

window.addEventListener("load", sumprice, false);		

//刪除

// 獲取所有帶有刪除事件的元素
let deleteButtons = document.querySelectorAll('.delete input');

// 對每個按鈕添加點擊事件
deleteButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // 獲取點擊按鈕的父元素（整列）
        let row = this.closest('.content-body');

        // 確認父元素存在，然後刪除
        if (row) {
            row.remove();
            sumprice();  // 刪除後重新計算總價
        }
    });
});

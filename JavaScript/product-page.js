function $(id){
    return document.getElementById(id);
} 

//+-盒子

function init(){
	//-------------------------------- 減
	$("minus").onclick=function(){
		let amount = $("numberbox").value;
		if(amount>0){
			$("numberbox").value = amount - 1;
		}
	}
	//--------------------------------- 加
	$("plus").onclick=function(){
		let amount = parseInt($("numberbox").value);
		$("numberbox").value = amount + 1;
	}

}	
window.addEventListener("load", init, false);	

//加入收藏
function addfavorite(){
    let heart = $('addfavorite');
    if(heart.title === "加入收藏"){ //加入收藏
        console.log(1)
        $('addfavorite').src="../Images/red-heart.svg";
        heart.title = "取消收藏";
    } else {   //取消收藏     
        heart.src="../Images/product-page-favorite.png";
        heart.title = "加入收藏";
    }

}
$('addfavorite').onclick=addfavorite;

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


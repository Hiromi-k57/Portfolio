"use strict";
document.querySelectorAll('.flip_card').forEach(card=>{
    card.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
    });
})
;
const textFromLeft = document.querySelectorAll(".textFromLeft");
const ovserverFromLeft = new IntersectionObserver(fromLeft,{rootMargin: "-30%"}); //実際に画面に入る少し前から監視を開始

textFromLeft.forEach(text =>{ //各テキストが画面に入る/出るのを監視
    ovserverFromLeft.observe(text)
}) 
/**
 * 
 * @param {IntersectionObserverEntry[]} entres 
 */
function fromLeft (entres)
{
    console.log(entres);
    
    entres.forEach((entree)=>{
        
        if(entree.isIntersecting){
            entree.target.classList.add("show")//要素がビューポート内に入ったら .showクラスを追加しCSSで色が左から右に変化するのを追加
        }
        else if(entree.rootBounds.top < entree.boundingClientRect.top){ //要素が画面下方向へスクロールアウトしたときは.showクラスを削除,効果をリセット
            entree.target.classList.remove("show")
        }
    })
}

const yearSpan =  document.querySelector('.thisYear'); 
const thisYear = new Date().getFullYear(); 
yearSpan.innerHTML = thisYear;
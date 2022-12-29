// ==UserScript==
// @name        Tinder Bot
// @namespace   Violentmonkey Scripts
// @match       https://tinder.com/*
// @grant       none
// @version     1.0
// @author      KK
// @description  
// ==/UserScript==


async function main() {
try{SwipeRight = setInterval(function () {
    let found = document.querySelector("#q888578821 > div > div.App__body.H\\(100\\%\\).Pos\\(r\\).Z\\(0\\) > div > main > div.H\\(100\\%\\) > div > div > div.Mt\\(a\\).Px\\(4px\\)--s.Pos\\(r\\).Expand.H\\(--recs-card-height\\)--ml.Maw\\(--recs-card-width\\)--ml > div > div > div.Pos\\(a\\).B\\(0\\).Iso\\(i\\).W\\(100\\%\\).Start\\(0\\).End\\(0\\) > div > div.Mx\\(a\\).Fxs\\(0\\).Sq\\(70px\\).Sq\\(60px\\)--s.Bd.Bdrs\\(50\\%\\).Bdc\\(\\$c-ds-border-gamepad-like-default\\) > button");
    if(found)
        found.click();

    console.log(new Date());
}, 300)}catch(e){console.log(e);location.reload();}
}
main().catch(console.error);

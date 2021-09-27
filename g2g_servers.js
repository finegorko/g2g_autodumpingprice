// ==UserScript==
// @name         G2G: Antonidas, Argent Dawn, Ravencrest
// @namespace    http://g2g.com/
// @version      0.21
// @author       Finegorko
// @include      https://www.g2g.com/sell/manage?region=41709&service=1&game=2299&type=0&sorting=title%40asc
// @include      https://www.g2g.com/offer/Antonidas*
// @include      https://www.g2g.com/offer/Ravencrest*
// @include      https://www.g2g.com/offer/Argent-Dawn*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function () {F
    "use strict";
    function AntonidasCheck() {
        let Antonidas_pathname = "/offer/Antonidas--DE----Alliance";
        if (location.pathname == Antonidas_pathname) {
            console.log("Server: Antonidas (EU)")
            document.querySelector(
                ".title_top-offers.other_seller_header"
            ).textContent = "Server: Antonidas (EU)";
            let y = 1; // price N
            let i = 1; // stock N
            let done = 0; // while
            let s = 2; // seller name
            function Stop() {
                done = done + 1;
            }
            while (done < 1) {
                let Stock = document.querySelectorAll(
                    ".offers-bottom-attributes.offer__content-lower-items"
                )[i].innerText;
                let Stock_N = Stock.replace(/[^0-9]/g, "");
                let SellerName = document.querySelectorAll(".seller__name-detail")[s]
                    .textContent;
                if (SellerName == "FineGold") {
                    console.log("Не могу перебить самого себя.");
                    Stop();
                } else if (Stock_N < 500) {
                    console.log(
                        Stock_N,
                        "тысяч",
                        "меньше чем 500 тысяч, перехожу к следующему..."
                    );
                    y = y + 1;
                    i = i + 3;
                    s = s + 1;
                } else {
                    console.log(Stock_N, "тысяч", "больше чем 500 тысяч, меняю цену...");
                    let lowest_price = document.querySelectorAll(".offer-price-amount")[y]
                        .textContent;
                    let dumping = 0.000001;
                    let Antonidas_Price = lowest_price - dumping;
                    localStorage.Antonidas_Price = Antonidas_Price.toFixed(6);
                    console.log("Текущая цена -", lowest_price);
                    console.log("Меняю цену на -", Antonidas_Price.toFixed(6));
                    Stop();
                }
            }
        }
    };
    function ArgentDawnCheck() {
        let ArgentDawn_pathname = "/offer/Argent-Dawn--EU----Alliance"
        if (location.pathname == ArgentDawn_pathname) {
            console.log("Server: Argent Dawn (EU)")
            document.querySelector('.title_top-offers.other_seller_header').textContent = "Server: Argent Dawn (EU)";
            let y = 1; // price N
            let i = 1; // stock N
            let done = 0 // while
            let s = 2; // seller name
            function Stop() {
                done = done + 1;
            }
            while (done < 1) {
                let Stock = document.querySelectorAll('.offers-bottom-attributes.offer__content-lower-items')[i].innerText;
                let Stock_N = Stock.replace(/[^0-9]/g, "");
                let SellerName = document.querySelectorAll('.seller__name-detail')[s].textContent;
                if (SellerName == "FineGold") {
                    console.log("Не могу перебить самого себя.")
                    Stop();
                } else if (Stock_N < 500) {
                    console.log(Stock_N, "тысяч", 'меньше чем 500 тысяч, перехожу к следующему...')
                    y = y + 1;
                    i = i + 3;
                    s = s + 1;
                } else {
                    console.log(Stock_N, "тысяч", 'больше чем 500 тысяч, меняю цену...')
                    let lowest_price = document.querySelectorAll('.offer-price-amount')[y].textContent;
                    let dumping = 0.000001;
                    let ArgentDawn_Price = lowest_price - dumping;
                    localStorage.ArgentDawn_Price = ArgentDawn_Price.toFixed(6);
                    console.log("Текущая цена -", lowest_price);
                    console.log("Меняю цену на -", ArgentDawn_Price.toFixed(6));
                    Stop();
                }
            }
        }
    }
    function RavencrestCheck() {
        let Ravencrest_pathname = "/offer/Ravencrest--EU----Alliance"
        if (location.pathname == Ravencrest_pathname) {
            console.log("Server: Ravencrest (EU)")
            document.querySelector('.title_top-offers.other_seller_header').textContent = "Server: Ravencrest (EU)";
            let y = 1; // price N
            let i = 1; // stock N
            let done = 0 // while
            let s = 2; // seller name
            function Stop() {
                done = done + 1;
            }
            while (done < 1) {
                let Stock = document.querySelectorAll('.offers-bottom-attributes.offer__content-lower-items')[i].innerText;
                let Stock_N = Stock.replace(/[^0-9]/g, "");
                let SellerName = document.querySelectorAll('.seller__name-detail')[s].textContent;
                if (SellerName == "FineGold") {
                    console.log("Не могу перебить самого себя.")
                    Stop();
                } else if (Stock_N < 500) {
                    console.log(Stock_N, "тысяч", 'меньше чем 500 тысяч, перехожу к следующему...')
                    y = y + 1;
                    i = i + 3;
                    s = s + 1;
                } else {
                    console.log(Stock_N, "тысяч", 'больше чем 500 тысяч, меняю цену...')
                    let lowest_price = document.querySelectorAll('.offer-price-amount')[y].textContent;
                    let dumping = 0.000001;
                    let Ravencrest_Price = lowest_price - dumping;
                    localStorage.Ravencrest_Price = Ravencrest_Price.toFixed(6);
                    console.log("Текущая цена -", lowest_price);
                    console.log("Меняю цену на -", Ravencrest_Price.toFixed(6));
                    Stop();
                }
            }
        }
    }
    function Servers() {
        AntonidasCheck()
        ArgentDawnCheck()
        RavencrestCheck()
    }
    window.onload = Servers()
})();
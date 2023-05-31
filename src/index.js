const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const navigation = document.querySelectorAll("header nav a");
navigation[0].textContent = siteContent.nav["nav-item-1"];
navigation[1].textContent = siteContent.nav["nav-item-2"];
navigation[2].textContent = siteContent.nav["nav-item-3"];
navigation[3].textContent = siteContent.nav["nav-item-4"];
navigation[4].textContent = siteContent.nav["nav-item-5"];
navigation[5].textContent = siteContent.nav["nav-item-6"];


navigation[0].setAttribute("class", "italic");
navigation[1].setAttribute("class", "italic");
navigation[2].setAttribute("class", "italic");
navigation[3].setAttribute("class", "italic");
navigation[4].setAttribute("class", "italic");
navigation[5].setAttribute("class", "italic");

const logo = document.getElementById("logo-img");
logo.setAttribute("src", "http://localhost:9000/img/logo.png");

const codeImg = document.getElementById("cta-img");
codeImg.setAttribute("src", "http://localhost:9000/img/cta.png");

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", "http://localhost:9000/img/accent.png");

const sentenceBegin = document.querySelector(".cta-text h1");
sentenceBegin.textContent = siteContent["cta"]["h1"];

const buttonBegin = document.querySelector(".cta-text button");
buttonBegin.textContent = siteContent["cta"]["button"];

const topContent = document.querySelectorAll(".top-content .text-content");
topContent[0].querySelector("h4").textContent =
  siteContent["ana-içerik"]["özellikler-h4"];

topContent[0].querySelector("p").textContent =
  siteContent["ana-içerik"]["özellikler-içerik"];

topContent[1].querySelector("h4").textContent =
  siteContent["ana-içerik"]["hakkımızda-h4"];

topContent[1].querySelector("p").textContent =
  siteContent["ana-içerik"]["hakkımızda-içerik"];

const bottomContent = document.querySelectorAll(
  ".bottom-content .text-content"
);

bottomContent[0].querySelector("h4").textContent =
  siteContent["ana-içerik"]["servisler-h4"];
bottomContent[0].querySelector("p").textContent =
  siteContent["ana-içerik"]["servisler-içeriği"];
bottomContent[1].querySelector("h4").textContent =
  siteContent["ana-içerik"]["ürünler-h4"];
bottomContent[1].querySelector("p").textContent =
  siteContent["ana-içerik"]["ürünler-içeriği"];
bottomContent[2].querySelector("h4").textContent =
  siteContent["ana-içerik"]["vizyon-h4"];
bottomContent[2].querySelector("p").textContent =
  siteContent["ana-içerik"]["vizyon-içeriği"];

const contact = document.querySelector(".contact");
contact.querySelector("h4").textContent =
  siteContent["iletisim"]["iletişim-h4"];

const contactMetin = document.querySelectorAll(".contact p");
contactMetin[0].textContent = siteContent["iletisim"]["adres"];
contactMetin[1].textContent = siteContent["iletisim"]["telefon"];
contactMetin[2].textContent = siteContent["iletisim"]["email"];

const footer = document.querySelector("footer a");
footer.textContent = siteContent["footer"]["copyright"];

footer.setAttribute("class", "bold");
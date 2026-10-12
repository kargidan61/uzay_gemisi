function girisYap() {
    var sifre = document.getElementById("sifreKutusu").value;
    var mesajAlani = document.getElementById("mesajAlani");
    var gizliMenu = document.getElementById("gizliMenu");
    var baslik = document.getElementById("baslik");

    if (sifre === "2025" || sifre === "1947" || sifre === "1980") {
        mesajAlani.textContent = "Giriş başarılı. Ana kontrol menüsü açıldı.";
        mesajAlani.style.color = "#00ff00";

        if (gizliMenu) {
            gizliMenu.style.display = "block";
        }

        if (baslik) {
            baslik.textContent = "GÜVENLİK DUVARI KAPANDI";
        }
    } else {
        mesajAlani.textContent = "Erişim kodu yanlış! Lütfen doğru kodu girin.";
        mesajAlani.style.color = "red";

        if (gizliMenu) {
            gizliMenu.style.display = "none";
        }
    }
}

function kalkanYonet(islem) {
    var durumKutusu = document.getElementById("kalkanDurumu");

    if (!durumKutusu) {
        return;
    }

    if (islem === "ac") {
        durumKutusu.textContent = "KALKANLAR AKTİF";
        durumKutusu.className = "durum-kutusu mavi";
    } else if (islem === "kapat") {
        durumKutusu.textContent = "KALKANLAR DEVRE DIŞI";
        durumKutusu.className = "durum-kutusu kirmizi";
    } else if (islem === "yokoldu") {
        durumKutusu.textContent = "SİSTEM ÇÖKTÜ - KALKANLAR YOK EDİLDİ!";
        durumKutusu.className = "durum-kutusu kalkan-yok-edildi";
    } else {
        durumKutusu.textContent = "GEÇERSİZ KOMUT";
        durumKutusu.className = "durum-kutusu kirmizi";
    }
}

function oksijenHesapla() {
    var secilenRutbe = document.getElementById("rutbeSecim").value;
    var sonucAlani = document.getElementById("sonucAlani");
    var oksijenMiktari;

    switch (secilenRutbe) {
        case "kaptan":
            oksijenMiktari = 90;
            break;
        case "muhendis":
            oksijenMiktari = 110;
            break;
        case "bilim":
            oksijenMiktari = 100;
            break;
        case "isci":
            oksijenMiktari = 800;
            break;
        default:
            oksijenMiktari = 0;
    }

    sonucAlani.textContent = "Günlük oksijen ihtiyacı: " + oksijenMiktari + " litre";
}

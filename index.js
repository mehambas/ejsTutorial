const express = require('express');
const app = express();
app.set('view engine', 'ejs');


app.use(express.static(__dirname + "/files"));


var kitaplar = [
    {
        img: 'https://www.panamayayincilik.com/images/urunler/Insan-Ne-Ile-Yasar-resim-346.jpg',
        kitapIsmi: 'Insan Ne ile Yasar',
        yazar: 'Lev N. Tolstoy',
        yayinevi: 'SİS YAYINCILIK',
        aciklama: 'İnsan Ne İle Yaşar, ünlü düşünür ve yazar Tolstoy?un okuyucunun manevi dünyasına hitap eden hikayelerinden oluşan en önemli eserlerinden biridir. Kitaba ismini veren hikayede, fakir bir ayakkabıcı ustası olan Simon tarafından kurtarılan Michael, şu temel soruların cevabını bulmaya çalışır: İnsana yön veren şey nedir, insana ne verilmemiştir, insan ne ile yaşar? Kitapta yer alan kısa hikayelerde Tolstoy insan doğasındaki iyilik ve kötülüğü, bencillikle ve paylaşımcılığı inceleyerek, okuyucuya ibretlik dersler verir.',
        yayinTarihi: '2016-07-15',
        baskiSayisi: '10',
        dil: 'TÜRKÇE',
        sayfaSayisi: ' 88',
        ciltTipi: 'Karton Kapak',
        fiyat: '15 TL',
        anaSayfa: '/',
        index: 0
    },

    {
        img: 'https://tse2.mm.bing.net/th?id=OIP.mXusyVCAJs8r6_PXmzYV8gHaLs&pid=Api&P=0&w=300&h=300',
        kitapIsmi: 'Hayvanlar Çiftliği',
        yazar: 'George Orwell',
        yayinevi: 'KELEBEK YAYINLARI',
        aciklama: "George Orwell'ın ilk kez 1945 te yayımlanan Hayvanlar Çiftliği (Bir Peri Masalı) adlı eseri 20. yüzyılın klasikleşmiş şiirsel hayvan masalı haline gelmiştir. George Orwell bu kitabında kendi acı alay ve keskin zekasını da katarak bir çiftliğin hayvanları arasında meydana gelen devrimin öyküsünü anlatırken iktidar, fesat ve yalanların idealizme nasıl ihanet ettiğini de açıkça gösteriyor. Sevin Okyay'ın duru Türkçesiyle dilimize kazandırdığımız bu eser kitaplığınızda sonsuza dek yerini koruyacaktır.",
        yayinTarihi: '2000-11-29',
        baskiSayisi: '4',
        dil: 'TÜRKÇE',
        sayfaSayisi: ' 125',
        ciltTipi: 'Karton Kapak',
        fiyat: '13 TL',
        anaSayfa: '/',
        index: 1
    }

    
];


app.get('/', function (req, res) {
    res.render('anasayfa', {kitaplarListe : kitaplar});
});



app.get('/kitap/:isim/:index', function (req, res) {
    var indexDegeri = req.params.index;

    var kitapIsmi = kitaplar[indexDegeri].kitapIsmi;
    var img = kitaplar[indexDegeri].img;
    var yazar = kitaplar[indexDegeri].yazar;
    var yayinevi = kitaplar[indexDegeri].yayinevi;
    var aciklama = kitaplar[indexDegeri].aciklama;
    var yayinTarihi = kitaplar[indexDegeri].yayinTarihi;
    var baskiSayisi = kitaplar[indexDegeri].baskiSayisi;
    var dil = kitaplar[indexDegeri].dil;
    var sayfaSayisi = kitaplar[indexDegeri].sayfaSayisi;
    var ciltTipi = kitaplar[indexDegeri].ciltTipi;
    var fiyat = kitaplar[indexDegeri].fiyat;
    var anaSayfa = kitaplar[indexDegeri].anaSayfa;


    res.render('kitap', {
        kitapIsmi,
        yazar,
        yayinevi,
        aciklama,
        yayinTarihi,
        baskiSayisi,
        dil,
        sayfaSayisi,
        ciltTipi,
        fiyat,
        anaSayfa,
        img
    });
});




let port = process.env.PORT;
if(port == "" || port == null){
  port = 5000;
}
app.listen(port, function(){
  console.log("port number : " + port);
});



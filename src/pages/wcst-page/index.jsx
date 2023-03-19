import React from "react";
import * as S from "./styles";

function WcstPage() {
  return (
    <S.Div>
      <h1>Wisconsin Card Sorting Test</h1>

      <p>
        Wisconsin Card Sorting Test(WCST), 1948 yılında David A. Grant ve Esta
        A. Berg tarafından geliştirilen ve frontal lob ile ilgili ölçümlerde
        kullanılan nöropsikolojik bir testtir. Teste son halini; Robert K.
        Heaton, Gordon J. Chelune, Jack L. Talley, Gary G. Kay ve Glenn Curtiss
        vermiştir.
      </p>

      <p>
        WCST, yönetici/yürütücü işlevleri ( Executive Functions ) ölçmeye
        yönelik bir testtir. Yönetici işlevler, belirli bir amacı/görevi
        gerçekleştirmeye yönelik bilişsel beceriler olarak tanımlanabilir. Bu
        beceriler: Dikkati odaklama, görevin çalışma belleğinde kodlanması,
        bozucu etkiye (Interference) direnç, art arda gelen durumlarda bir
        sonraki adımın belirlenmesi, planlama yapma ve karar verme gibi bir dizi
        karmaşık süreçlerden oluşmaktadır.
      </p>

      <p></p>

      <h2>Materyaller ve Uygulama</h2>

      <p>
        Test; farklı şekillerden, renklerden ve şekil sayısından oluşan 4 adet{" "}
        <b>uyarıcı</b> karttan ve her destede 64 kartın olduğu 2 destelik{" "}
        <b>tepki</b> kartlarından oluşmaktadır. Hem uyarıcı kartları hem de
        tepki kartları standart bir sıraya göre dizilmektedir.
      </p>

      <p>
        Katılımcıdan her bir tepki kartını uyarıcı kartlardan biriyle
        eşleştirmesi beklenmektedir. Katılımcı yaptığı eşleştirmelerde gözlemci
        tarafından doğru veya yanlış şeklinde uyarılmaktadır ve eşleştirmeler
        bir form ile kayıt altına alınmaktadır.{" "}
      </p>
      <S.Image src="../../../assets/images/2.png" alt="" />

      <h3>Teste Başlama</h3>
      <div>Aşağıdaki görsele tıklayarak teste başlayabilirsiniz. </div>

      <S.RunBox>
        <S.RunLink to="/wcst-test-window">
          <button>Click</button>
        </S.RunLink>
      </S.RunBox>

      <h2>Referanslar</h2>

      <ul>
        <li>
          <p>
            Bayer, Merve. (2013). Yönetici Karmaşık Dikkat İşlevlerini
            Değerlendiren Testlerin 8, 9 Ve 10 Yaş Grubu Türk Çocuklarında
            Güvenilirlik Ve Geçerlilik Çalışmaları. Yayımlanmamış yüksek lisans
            tezi. İstanbul : İstanbul Bilim Üniversitesi, Sosyal Bilimler
            Enstitüsü.
          </p>
        </li>
        <li>
          <p>
            Karakaş, S., Irak, M., Kurt, M., & Erzengin, Ö.U. (1999). Wisconsin
            Kart Eşleme Testi ve Stroop Testi TBAG Formu: Ölçülen özellikler
            açısından karşılaştırmalı analiz. Psikiyatri Psikoloji
            Psikofarmakoloji Dergisi, 7(3), 179-192.
          </p>
        </li>
        <li>
          <p>
            Karakaş, S. (2017). Prof. Dr. Sirel Karakaş Psikoloji Sözlüğü:
            Bilgisayar Programı ve Veritabanı -{" "}
            <a href="https://www.psikolojisozlugu.com">
              www.psikolojisozlugu.com
            </a>{" "}
            (sürüm: 5.2.0/2022){" "}
          </p>
        </li>
      </ul>
    </S.Div>
  );
}

export default WcstPage;

import React from "react";
import * as S from "./styles";

function AboutPage() {
  return (
    <S.AboutPage>
      <h1>Hakkımda</h1>

      <S.Div>
        <S.Text>
          <p>
            Merhaba ben Fırat, psikoloji bölümü mezunuyum. interaktif ve
            kullanışlı arayüzler oluşturuyorum. JavaScript, CSS, HTML ile
            çalışmaktan ve tuşlara basmaktan keyif alıyorum!
          </p>
          <div>kullandığım bazı teknolojiler</div>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Express</li>
            <li>Node</li>
          </ul>
          <div>Bana altunnfirat@gmail.com üzerinden ulaşabilirsiniz.</div>
        </S.Text>
        <S.Image>
          <img src="../../../assets/images/photo.jpg" alt="..." />
        </S.Image>
      </S.Div>
    </S.AboutPage>
  );
}

export default AboutPage;

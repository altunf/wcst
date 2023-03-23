import React from "react";
import * as S from "./styles";

function AboutPage() {
  return (
    <S.AboutPage>
      <h1>Hakkımda</h1>
      <S.Div>
        <div>
          <p>
            Merhaba ben Fırat, interaktif ve kullanışlı arayüzler
            oluşturan/tasarlayan bir frontend geliştirici ve aynı zamanda bir
            psikoloğum. Tartışmadan işbirliğine kadar programlama sürecinin her
            adımından ve tuşlara basmaktan oldukça keyif alıyorum.
          </p>
          <div>Son zamanlarda kullandığım bazı teknolojiler:</div>
          <p>
            <li>JavaScript</li>
            <li>React</li>
            <li>Express</li>
            <li>Node</li>
          </p>
        </div>
        <img src="../../../assets/images/about.jpg" alt="..." />
      </S.Div>
    </S.AboutPage>
  );
}

export default AboutPage;

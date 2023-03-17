import React from "react";
import * as S from "./styles";

function WcstPage() {
  return (
    <S.Div>
      <h1>Wisconsin Card Sorting Test</h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
        placeat cum repudiandae illum quis quia eius voluptates nostrum quae
        excepturi error debitis similique, unde nemo earum laborum fugit! In,
        obcaecati.
      </p>

      <h2>Usage</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, illum
        quasi? Dolor, error alias. Deleniti quas dolorum porro earum sed,
        repudiandae explicabo molestiae temporibus facilis quae ab officiis
        cumque corporis.
      </p>

      <S.RunBox>
        <S.RunLink to="/wcst-test-window">
          <S.Image src="../../../assets/images/1.png" alt="" />
          <S.Button>Click Me </S.Button>
        </S.RunLink>
      </S.RunBox>

      <h2>Resources</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        facilis sed perferendis dolor error omnis libero nobis, deserunt, velit
        iste culpa, dolorum aliquid! Pariatur eligendi corrupti iste
        consectetur, harum nobis.
      </p>
    </S.Div>
  );
}

export default WcstPage;

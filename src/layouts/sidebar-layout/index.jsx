import React from "react";
import * as S from "./styles";

function Sidebar() {
  return (
    <S.SideBar>
      <S.Logo to="/">
        <img src="../../../assets/images/logo.png" alt="logo" />
      </S.Logo>

      <S.A to="/">Ana Sayfa</S.A>
      <S.A to="/about">Hakkımda</S.A>
    </S.SideBar>
  );
}

export default Sidebar;

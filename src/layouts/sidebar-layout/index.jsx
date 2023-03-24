import React from "react";
import * as S from "./styles";

function Sidebar() {
  return (
    <S.SideBar>
      <S.Logo to="/">
        <img src="../../../images/logo.png" alt="logo" />
      </S.Logo>

      <S.Menu to="/">Ana Sayfa</S.Menu>
      <S.Menu to="/about">Hakkımda</S.Menu>
      <S.IconDiv>
        <S.Icon
          to="https://github.com/altunf"
          target="_blank"
          className="pi pi-github"
        ></S.Icon>
        <S.Icon to="mailto:altunnfirat@gmail.com" className="pi pi-at"></S.Icon>
      </S.IconDiv>
    </S.SideBar>
  );
}

export default Sidebar;

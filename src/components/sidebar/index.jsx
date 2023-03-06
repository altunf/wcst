import React from "react";
import * as S from "./styles";

function Sidebar() {
  return (
    <S.SideBar>
      <S.A  href="/">
        Home
      </S.A>
      <S.A href="/about">About</S.A>
      <S.A href="/contact">Contact</S.A>
     
    </S.SideBar>
  );
}

export default Sidebar;

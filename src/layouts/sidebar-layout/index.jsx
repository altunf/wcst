import React from "react";
import * as S from "./styles";

function Sidebar() {
  return (
    <S.SideBar>
      <S.A to="/">Home</S.A>
      <S.A to="/about">About</S.A>
      <S.A to="/contact">Contact</S.A>
    </S.SideBar>
  );
}

export default Sidebar;

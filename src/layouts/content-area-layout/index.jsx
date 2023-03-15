import React from "react";
import * as S from "./styles";
import { Outlet } from "react-router-dom";

function ContentArea() {
  return (
    <S.Content>
      <Outlet />
    </S.Content>
  );
}

export default ContentArea;

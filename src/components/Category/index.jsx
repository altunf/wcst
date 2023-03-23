import React, { useContext } from "react";
import { WcstContext } from "../../components/context";
import * as S from "./style";

function Category() {
  const { counter } = useContext(WcstContext);
  const green = `text-green-500`;

  return (
    <S.Category>
      <h3>Kategoriler:</h3>
      <h3 className={counter >= 8 ? green : ``}>R</h3>
      <h3 className={counter >= 16 ? green : ``}>Ş</h3>
      <h3 className={counter >= 24 ? green : ``}>M</h3>
      <h3 className={counter >= 32 ? green : ``}>R</h3>
      <h3 className={counter >= 40 ? green : ``}>Ş</h3>
      <h3 className={counter >= 48 ? green : ``}>M</h3>
    </S.Category>
  );
}

export default Category;

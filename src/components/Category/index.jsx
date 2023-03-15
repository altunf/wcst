import React, { useContext } from "react";
import { WcstContext } from "../../components/context/wcstContext";
import * as S from "./style";

function Category() {
  const { counter } = useContext(WcstContext);
  const green = `text-green-500`;

  return (
    <S.Category>
      <h3>Kategoriler:</h3>
      <h3 className={counter >= 10 ? green : ``}>R</h3>
      <h3 className={counter >= 20 ? green : ``}>Ş</h3>
      <h3 className={counter >= 30 ? green : ``}>M</h3>
      <h3 className={counter >= 40 ? green : ``}>R</h3>
      <h3 className={counter >= 50 ? green : ``}>Ş</h3>
      <h3 className={counter >= 60 ? green : ``}>M</h3>
    </S.Category>
  );
}

export default Category;

import { useContext } from "react";
import Category from "../Category";
import * as S from "./styles";
import { WcstContext } from "../../components/context";

function WcstTable() {
  const { result } = useContext(WcstContext);
  const green = `text-green-500`;
  return (
    <S.Div>
      <Category />
      <S.Table>
        {result.map((item, index) => (
          <S.Line key={index}>
            <S.Box className={item.color && green}> R </S.Box>
            <S.Box className={item.figure && green}> Ş </S.Box>
            <S.Box className={item.count && green}> M </S.Box>
            <S.Box className={item.other && green}> D </S.Box>
          </S.Line>
        ))}
      </S.Table>
    </S.Div>
  );
}

export default WcstTable;

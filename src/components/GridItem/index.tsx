import * as C from './styles';
import { GridItemType } from '../../types/GridItemType';
import b7Svg from '../../svgs/pokeball.svg';
import { items } from '../../data/items';

type Props = {
  item: GridItemType;
  onClick: () => void;
};

export const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container shown={item.shown || item.permanentShown} onClick={onClick}>
      <C.Inner shown={item.shown || item.permanentShown}>
        <C.Front>
          <C.Icon src={b7Svg} alt="Pokeball" opacity={0.3} />
        </C.Front>

        <C.Back>
          {item.item !== null && <C.Icon src={items[item.item].icon} />}
        </C.Back>
      </C.Inner>
    </C.Container>
  );
};

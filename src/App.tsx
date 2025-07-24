import { useEffect, useState } from 'react';
import * as C from './App.styles';

import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg';

import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';
import { GridItem } from './components/GridItem';

import { GridItemType } from './types/GridItemType';
import { items } from './data/items';
import { formatTimeElapsed } from './utils/formatTimeElapsed';

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);
  const [locked, setLocked] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(prev => prev + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [playing]);

  const resetAndCreateGrid = () => {
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[pos].item = i;
      }
    }

    setGridItems(tmpGrid);
    setPlaying(true);
  };

  const handleItemClick = (index: number) => {
    if (!playing || locked || shownCount >= 2 || gridItems[index].shown || gridItems[index].permanentShown) {
      return;
    }

    let tmpGrid = [...gridItems];
    tmpGrid[index].shown = true;
    setGridItems(tmpGrid);
    setShownCount(prev => prev + 1);
  };

  useEffect(() => {
    if (shownCount === 2) {
      setLocked(true);

      const shownItems = gridItems.filter(item => item.shown && !item.permanentShown);
      if (shownItems.length === 2) {
        const [first, second] = shownItems;

        if (first.item === second.item) {
          let tmpGrid = [...gridItems];
          tmpGrid = tmpGrid.map(item =>
            item.shown && !item.permanentShown
              ? { ...item, permanentShown: true, shown: false }
              : item
          );
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          setTimeout(() => {
            let tmpGrid = [...gridItems];
            tmpGrid = tmpGrid.map(item =>
              item.shown && !item.permanentShown
                ? { ...item, shown: false }
                : item
            );
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);
        }

        setMoveCount(prev => prev + 1);
      }

      setTimeout(() => setLocked(false), 1100);
    }
  }, [shownCount, gridItems]);

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink>
          <img src={logoImage} width="200" alt="Logo DevMemory" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label="Movimentos" value={moveCount.toString()} />
        </C.InfoArea>

        <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid} />
      </C.Info>

      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
};

export default App;

import React from 'react';
import { ROWPOINTS } from '../setup';

export const useGameStatus = (rowsCleared: number) => {
  const [score, setScore] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  const [level, setLevel] = React.useState(1);

  React.useEffect(() => {
    if (rowsCleared > 0) {
      setScore(prev => prev + ROWPOINTS[rowsCleared - 1] * level);
      setRows(prev => prev + rowsCleared);
    }
  }, [rowsCleared]);

  return { score, setScore, rows, setRows, level, setLevel };
};

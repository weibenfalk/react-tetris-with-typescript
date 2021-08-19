import React from 'react';
import Cell from '../Cell/Cell';
import { StyledStage } from './Stage.styles';
import { TETROMINOS } from '../../setup';

export type STAGECELL = [keyof typeof TETROMINOS, string];
export type STAGE = STAGECELL[][];

type Props = {
  stage: STAGE;
}

const Stage: React.FC<Props> = ({ stage }) => (
  <StyledStage>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
  </StyledStage>
)

export default Stage;
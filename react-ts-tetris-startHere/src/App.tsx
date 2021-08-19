import React from 'react';
// Styles
import { StyledTetrisWrapper, StyledTetris } from './App.styles';

const App: React.FC = () => {
  return (
    <StyledTetrisWrapper role='button' tabIndex={0}>
      <StyledTetris>Start here!</StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;

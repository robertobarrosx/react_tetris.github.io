import React from 'react';

import { StyledDisplay } from './styles/StyledDisplay';
import {StyledNext} from './styles/StyledNext';
import Cell from './Cell';



const DisplayTetro = ({ tetro,text}) =>

(
    <StyledDisplay>
        {text}
    <StyledNext width={4} height={4}>
        {tetro.map(row => 
                    row.map((coluna,x) => <Cell key={x} type={coluna} />)

        )}        
    </StyledNext>
    </StyledDisplay>
  );
  
  export default DisplayTetro;
  
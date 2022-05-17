import React from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
    cell: Cell;
    selected: boolean;
    handleClick: (cell: Cell) => void
}

const CellComponent: React.FC<CellProps> = ({ cell, selected, handleClick }) => {
    // const isKingUnderAttack = cell.figure?.isKingUnderAttack(cell);
    return (
        <div
            // className={['cell', isKingUnderAttack && 'risk-cell', cell.color, selected ? 'selected' : ''].join(' ')}
            className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
            onClick={() => handleClick(cell)}
            style={{ backgroundColor: cell.available && cell.figure ? 'green' : '' }}
        >
            {cell.available && !cell.figure && <div className={'available'} />}
            {cell.figure?.logo && <img src={cell.figure.logo} alt='figure' />}
        </div>
    )
}

export default CellComponent;
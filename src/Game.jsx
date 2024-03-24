import React, { useState, useCallback, useRef } from 'react';

const neighboringCell = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
];

const generateEmptyGrid = (numRows, numCols) => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
};

const generateRandomGrid = (numRows, numCols) => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0)));
    }
    return rows;
};

const GameOfLife = () => {
    const [numRows, setNumRows] = useState(20);
    const [numCols, setNumCols] = useState(20);
    const [grid, setGrid] = useState(() => generateEmptyGrid(20, 20));
    const [running, setRunning] = useState(false);
    const runningRef = useRef(running);
    runningRef.current = running;
    const [inputHeight, setInputHeight] = useState('');
    const [inputWidth, setInputWidth] = useState('');
    const [error, setError] = useState('');

    const checkInput = () => {
        const newHeight = parseInt(inputHeight, 10);
        const newWidth = parseInt(inputWidth, 10);

        if (isNaN(newHeight) || isNaN(newWidth) || newHeight < 3 || newHeight > 40 || newWidth < 3 || newWidth > 40) {
            setError('Please enter valid height and width between 3 and 40.');
            return;
        }

        setNumRows(newHeight);
        setNumCols(newWidth);
        setGrid(generateEmptyGrid(newHeight, newWidth));
        setError('');
    };

    const runGame = useCallback(() => {
        if (!runningRef.current) {
            return;
        }

        setGrid((currentGrid) => {
            return currentGrid.map((row, i) =>
                row.map((cell, j) => {
                    let neighbors = 0;
                    neighboringCell.forEach(([x, y]) => {
                        const newI = i + x;
                        const newJ = j + y;
                        if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                            neighbors += currentGrid[newI][newJ];
                        }
                    });

                    if (cell === 1 && (neighbors < 2 || neighbors > 3)) return 0;
                    if (cell === 0 && neighbors === 3) return 1;
                    return cell;
                })
            );
        });

        setTimeout(runGame, 1200);
    }, [numRows, numCols]);

    return (
        <>
            <div>
                Height:
                <input
                    type="number"
                    value={inputHeight}
                    onChange={(e) => setInputHeight(e.target.value)}
                />
                Width:
                <input
                    type="number"
                    value={inputWidth}
                    onChange={(e) => setInputWidth(e.target.value)}
                />
                <button onClick={checkInput}>Submit</button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
            <button
                onClick={() => {
                    setRunning(!running);
                    if (!running) {
                        runningRef.current = true;
                        runGame();
                    }
                }}
            >
                {running ? 'Stop Autoplay' : 'Start Autoplay'}
            </button>
            <button
                onClick={() => {
                    setGrid(generateRandomGrid(numRows, numCols));
                }}
            >
                Randomize Grid
            </button>
            <button
                onClick={() => {
                    setGrid(generateEmptyGrid(numRows, numCols));
                }}
            >
                Clear Grid
            </button>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${numCols}, 20px)`,
                }}
            >
                {grid.map((rows, i) =>
                    rows.map((col, j) => (
                        <div
                            key={`${i}-${j}`}
                            onClick={() => {
                                const newGrid = grid.map(arr => [...arr]);
                                newGrid[i][j] = grid[i][j] ? 0 : 1;
                                setGrid(newGrid);
                            }}
                            style={{
                                width: 20,
                                height: 20,
                                backgroundColor: grid[i][j] ? 'black' : undefined,
                                border: 'solid 1px gray',
                            }}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export default GameOfLife;

import React, { useEffect, useRef, useState } from 'react';
import { Colors } from '../models/Colors';
import { Player } from '../models/Player';

interface TimerProps {
    currentPlayer: Player | null;
    handleRestart: () => void
}

const Timer: React.FC<TimerProps> = ({ currentPlayer, handleRestart }) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    function startDecrementingTime(callback: any): void {
        timer.current = setInterval(callback, 1000)
    }
    useEffect(() => {
        function startTimer(): void {
            if (timer.current) {
                clearInterval(timer.current);
            }
            const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
            startDecrementingTime(callback)
        }
        startTimer()
    }, [currentPlayer]);

    useEffect(() => {
        if (timer.current && (blackTime === 0 || whiteTime === 0)) {
            clearInterval(timer.current)
        }
    }, [blackTime, whiteTime])

    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1)
    }
    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1)
    }
    const handleRestartAndResetTime = () => {
        setBlackTime(300)
        setWhiteTime(300)
        handleRestart()
        startDecrementingTime(decrementWhiteTimer)
    }
    return (
        <div className='timer'>
            <div>
                <button
                    onClick={handleRestartAndResetTime}
                    className='restart-button'
                >
                    Restart game
                </button>
            </div>
            <h3>Black - {blackTime}</h3>
            <h3>White - {whiteTime}</h3>
            <div className='winner-message'>
                {blackTime === 0 && 'White figures won' }
                {whiteTime === 0 && 'Black figures won' }
            </div>
        </div>
    );
};

export default Timer;

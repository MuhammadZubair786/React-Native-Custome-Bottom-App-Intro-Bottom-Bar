import React, { useState, useEffect } from 'react';
import { ProgressBar, Colors } from 'react-native-paper';

function ProgressEvent() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + 0.01;
                return newProgress > 1 ? 0 : newProgress; 
            });
        }, 100);

    }, []);

    return (
        <ProgressBar progress={progress} color={"red"} />
    );
}

export default ProgressEvent;

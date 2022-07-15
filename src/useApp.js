import { useState, useEffect } from 'react';


const useApp = (API) => {
    const [window, setWindow] = useState([]);

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setWindow(data));
    }, []);
    return window;
};

export default useApp;
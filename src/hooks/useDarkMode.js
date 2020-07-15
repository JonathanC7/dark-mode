import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [values, setValues] = useLocalStorage('dark-mode-status'); 
    useEffect(() => {
        document.body.className = values ? ' dark-mode' : '';
    }, [setValues])
    return [values, setValues]
}
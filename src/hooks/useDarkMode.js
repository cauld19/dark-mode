import useLocalStorage from './useLocalStorage';

import {useEffect} from 'react';

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('dark-Mode');

    useEffect(()=>{
        let body = document.body.classList;

        if(value === true){
            return body.add('dark-mode')
        }else{
            return body.remove('dark-mode')
        }

    },[value])

    return [value, setValue]
}

export default useDarkMode;

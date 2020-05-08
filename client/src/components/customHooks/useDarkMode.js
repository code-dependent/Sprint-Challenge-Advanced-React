import { useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key, initvalue)=>{
    const [value, setValue] = useLocalStorage(key, initvalue)

    useEffect(()=>{
        value ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')
    },[value])
 return [value, setValue]
}
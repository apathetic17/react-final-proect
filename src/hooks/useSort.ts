import { useState } from "react";;

export const useSort = <S>(arr: S[], func: (a: S, b: S) => number, func2: (a: S, b: S)=> number) => {
    const [sortBy, setSortBy] = useState<'asc' | 'desc'>('asc'); 
    return () => {
        if ( sortBy === 'asc' ) {
            setSortBy('desc')
            return [...arr].sort(func);
        } else {
            setSortBy('asc')
            return [...arr].sort(func2);
        }
    }
}

import { useState, useCallback } from 'react';

export const useSelecteds = (state) => {
    const [selecteds, setSelecteds] = useState(state || []);

    const toggle = useCallback((el) => {
        setSelecteds((st) => (st.includes(el) ? st.filter((e) => e !== el) : [...st, el]));
    }, []);

    return [selecteds, setSelecteds, toggle];
};

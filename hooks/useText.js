import { useState, useCallback, useEffect } from 'react';

export const useText = (initialText) => {
    const [ text, setText] = useState(initialText);

    const textChange = useCallback(e => {
        const { name, value } = e.target
        setText(text => ({ ...text, [name]: value }))
    }, []);
    useEffect(() => {
        setText(initialText)
    }, [initialText]);

    return [text, setText, textChange, (field) => ({
        name: field,
        value: text[field],
        onChange: textChange,
    })]
};
import { useCallback, useState } from 'react';

export default function useCount(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    const hanleClick = useCallback(() => setCount(count + 1), [count]);

    // const firstName = 'Silvi';
    // const obj = { firstName: 'Silvi' };
    // const obj1 = { firstName };
    return {
        silvi: count,
        hanleClick,
    }
}
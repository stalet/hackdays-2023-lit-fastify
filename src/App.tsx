import React, { useEffect, useState } from 'react';

export default function App({ start = 10 }: { start: number }) {
    const [count, setCount] = useState(start);

    /*
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
*/

    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
    );
}

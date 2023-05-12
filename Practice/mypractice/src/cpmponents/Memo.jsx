// function MovieViewsRealtime({ title, releaseDate, views }) {
//     return (
//         <div>
//             <Movie title={title} releaseDate={releaseDate} />
//             Movie views: {views}
//         </div>
//     );
// }
import { useMemo, useState } from "react";

import React from "react";

function AppMemo() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(2);

    const useMemozition = useMemo(
        function multicount() {
            console.log("rerendering");
            return count * 10;
        },
        [count]
    );


    // ***********withoutmem************
    // function multicount() {
    //     console.log("rerendering");
    //     return count * 10;
    // }

    return (
        <div className="App">
            <h1>count:{count}</h1>
            <h2>item:{item}</h2>
            <h3 style={{fontSize:""}}>{useMemozition}</h3>
            <button onClick={() => setCount(count + 1)}>Count++</button>
            <button onClick={() => setItem(item * 5)}>Item++</button>
        </div>
    );
}
export default AppMemo;

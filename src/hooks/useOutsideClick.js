import { useEffect, useRef } from "react";

export function useOutsideClick( close) {
    const ref = useRef();
      useEffect(
        function () {
         //here the click event is only attached when there's an openName
          function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
              close();
            }
          }
    
          document.addEventListener("click", handleClick, true);
          return () => document.removeEventListener("click", handleClick, true);
        },
        [close]
        
      );
    return ref;  
}

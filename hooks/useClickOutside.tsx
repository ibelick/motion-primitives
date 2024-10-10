import { RefObject, useEffect } from "react"

function useClickOutside<T extends HTMLElement>(
   ref: RefObject<T>,
   handler: (event: MouseEvent | TouchEvent) => void,
   ignoreRef?: RefObject<T>,
): void {
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
         // Check if the event target is within the main ref or the ignoreRef
         if (
            !ref ||
            !ref.current ||
            ref.current.contains(event.target as Node) ||
            (ignoreRef && ignoreRef.current && ignoreRef.current.contains(event.target as Node))
         ) {
            return
         }

         handler(event)
      }

      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)

      return () => {
         document.removeEventListener("mousedown", handleClickOutside)
         document.removeEventListener("touchstart", handleClickOutside)
      }
   }, [ref, ignoreRef, handler])
}

export default useClickOutside

import { useEffect } from "react";

export const useTitle = (title) => {
  
    useEffect ( () => {
        document.title = `Cinemate |  ${title}`;
        console.log(title);
      },[title]);
  
    return null;
}

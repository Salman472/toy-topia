import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title=` ${title} | ToyTopia`
    },[])
};

export default useTitle;
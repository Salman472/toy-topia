import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Toy from './Toy';
import UserLoading from '../loading/UserLoading';

const ToyCard = () => {
    const {loading,setLoading}=use(AuthContext)
    // const [toy,setToy]=useState({})
    // if(loading){
    //     return <UserLoading/>
    // }
    const data=useLoaderData()
//    const filterToy= data.filter(toys=>toys.publish==="popular")
//    setToy(filterToy)
//     console.log(toy);
//     useEffect(() => {
//     setLoading(true)
//     const delay=setTimeout(() => {
//       if (id == "0") {
//       setCategoryNews(data);
//     } else if (id == "1") {
//       const filteredNews = data.filter(
//         (news) => news.others.is_today_pick == true
//       );

//       setCategoryNews(filteredNews);
//     } else {
//       const filteredNews = data.filter((news) => news.category_id == id);
//       setCategoryNews(filteredNews);
//     }
//     setLoading(false)
//     }, 1000);
//     return ()=>{
//       clearTimeout(delay)
//     }
//   }, [id, data]);
    return (
        <div>
            {
                data.map(toys=><Toy toys={toys} key={toys.toyId}/>)
            }
        </div>
    );
};

export default ToyCard;
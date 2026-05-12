import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';


const Mainlayout = ({children}) => {
    return (
        <>
          <Header/>
          <BreakingNews/>
          <Navbar/> 
          {children} 
        </>
    );
};

export default Mainlayout;
import React from 'react';


function Nav({lists}){
    
   
    return( 
      <ul>
        {lists.map(list=><li key={list.id}>{list.title}</li>)}
      </ul>
    )
  }

export default Nav;
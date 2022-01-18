import React, { useState } from "react";
import Export from "../Component/Export";


export default function Home() {
  
  return (<div>
    {[...Array(3)].map((v,i)=><Export key={i}/>)}

  </div>);
}

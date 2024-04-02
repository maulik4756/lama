import { Exo } from "next/font/google";

type User = {
    name: string,
    age : number
}

const user: User ={
    name: "maulik",
    age: 20
}

console.log(user);

import React from 'react'

function page() {
    type User = {
    name: string,
    age : number
}

const user: User ={
    name: "maulik",
    age: 20
    }
    console.log(user);
  return (
      <div>page</div>
  )
}

export default page
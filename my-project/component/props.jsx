import React from 'react'
import me from "../src/assets/me.avif";
import goodness from "../src/assets/goodness.avif";
import micheal from "../src/assets/micheal.avif";


export default function Props() {
  return (
      <div className="flex flex-col items-center justify-center gap-20 sm:flex-row bg-gray-400 my-20 h-screen">
        <First
          name="Chizaram Chima"
          image={me}
          role="Mathematician"
          club="Say hello"
        />
        <First
          name="Udo Chimgozirim"
          image={goodness}
            role="Software Engineer"
          club="say Hi"
        />
        <First
          name="Micheal Chigozirim"
          image={micheal}
          role="Chef"
          club="Say Welcome"
        />
      </div>
    
  )
}

function First({ name, image, role, club }) {
  return (
    
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 text-black shadow-md sm:w-80">
      <img src={image} alt="" className="h-70 w-70 rounded-md" />
      <h1 className="text-lg  font-bold">Name: {name}</h1>
      <p className="text-gray-600 font-mono text-90px">Role: {role}</p>
      <button className="rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
        {club}
      </button>
    </div>
    
  );
}
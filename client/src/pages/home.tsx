import React from "react";


export default function Home({ name }: { name: string }) {
  return (
    <div>
      {name ? 'Hi ' + name: 'You are not authenticated'}
    </div>
  )
}
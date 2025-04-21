import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-center items-center p-5 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
      <img src="../public/meme.png" alt="logo" className="w-20" />
      <h1 className="ml-5 text-5xl font-bold">Meme Generator</h1>
    </header>
  )
}

export default Header

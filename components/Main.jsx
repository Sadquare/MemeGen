import React, { useEffect } from 'react';
import { useState } from 'react';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import { useRef } from 'react';

const Main = () => {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into a Door",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    const memeRef = useRef(null);

    function downloadMeme() {
        if (memeRef.current === null) return;

        htmlToImage.toPng(memeRef.current)
            .then((dataUrl) => {
                download(dataUrl, 'meme.png');
            })
            .catch((err) => {
                console.error('oops, something went wrong!', err);
            });
    }


    function handleText(e) {
        const { value, name } = e.target
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
    }
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    function getMeme() {
        const randomMeme = Math.floor(Math.random() * allMemes.length)
        const imgUrl = allMemes[randomMeme].url
        setMeme(prev => ({
            ...prev,
            imageUrl: imgUrl
        }))
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">

            <div className="flex flex-wrap justify-center gap-4 mb-10">
                <label className="text-xl font-bold text-black">
                    Top Text:
                    <input
                        type="text"
                        name="topText"
                        className="ml-2 border-2 rounded-2xl font-light px-2 py-1 text-black"
                        value={meme.topText}
                        onChange={handleText} />
                </label>

                <label className="text-xl font-bold text-black">
                    Bottom Text:
                    <input
                        type="text"
                        name="bottomText"
                        className="ml-2 border-2 rounded-2xl font-light px-2 py-1 text-black"
                        value={meme.bottomText}
                        onChange={handleText}
                    />
                </label>

                <button className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition"
                    onClick={getMeme}>
                    Get a meme
                </button>
                <button
                    className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition"
                    onClick={downloadMeme}
                >
                    Download Meme
                </button>

            </div>


            <div className="relative w-fit" ref={memeRef}>

                <span className="absolute top-2 left-1/2 -translate-x-1/2 text-white font-extrabold text-2xl uppercase drop-shadow-[0_0_4px_black] text-center">
                    {meme.topText}
                </span>


                <img
                    src={meme.imageUrl}
                    alt="Meme"
                    className="w-[400px] h-auto"
                />


                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white font-extrabold text-2xl uppercase drop-shadow-[0_0_4px_black] text-center">
                    {meme.bottomText}
                </span>
            </div>
        </div>
    )
}

export default Main
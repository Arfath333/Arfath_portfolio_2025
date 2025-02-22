import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandVite } from "react-icons/tb"
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="boredr-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">
      Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:cursor-pointer">
            <RiReactjsLine  className="text-5xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 hover:cursor-pointer">
        <TbBrandVite className="rounded-[12px] text-[80px] p-3 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:cursor-pointer">
            <RiTailwindCssFill className="text-5xl text-sky-700"/>
        </div>
      </div>
          </div>
  )
}

export default Technologies;

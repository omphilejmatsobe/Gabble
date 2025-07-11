"use client"
import { useEffect, useState } from "react";

const newBlog =
[
  {id:1, typeOf:"Title", content:""},
  {id:2, typeOf:"Header", content:""},
  {id:3, typeOf:"Normal-Text", content:""},
  {id:4, typeOf:"Image", content:""},
]

export default function Home() {

  const [Inputs, setInputs] = useState(newBlog)

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col w-full h-full justfy-center text-black gap-5">
        {
          Inputs.map((item, idx) =>
          (
            <InputComponent typeOfInput={item.typeOf} data={item.content} parentStates={Inputs} />
          ))
        }
      </div>
    </div>
  );
}

type props =
{
    data: string
    parentStates: { id: number; typeOf: string; content: string; }[]
    typeOfInput: string
}
export function InputComponent ({typeOfInput, data, parentStates}:props)
{
  let input = <input></input>

  if (typeOfInput == "Title")
  {
    input = (
        <input className="w-full bg-gray-300 h-fit" type="text" placeholder="Title">
        </input>)
  }
  else if (typeOfInput == "Header")
  {
    input = (
        <input className="w-full bg-gray-300 h-fit" type="text" placeholder="Title">
        </input>)
  }
  else if (typeOfInput == "Normal-Text")
  {
    input = (
        <input className="w-full bg-gray-300 h-fit" type="text" placeholder="Title">
        </input>)
  }
  else if (typeOfInput == "Image")
  {
    input = (
        <input className="w-full bg-gray-300 h-fit" type="text" placeholder="Title">
        </input>)
  }

  return(
        <div className="w-full flex flex-row">
          <div className="">
            <button  className="rounded-sm px-4 py-2 bg-black text-white cursor-pointer">
              Add
            </button>
          </div>
            {input}
        </div>
  )
}
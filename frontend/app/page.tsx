"use client"
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const newBlog =
[
  {id:1, typeOf:"Title", content:""},
  {id:2, typeOf:"Header", content:""},
  {id:3, typeOf:"Normal-Text", content:""},
  {id:4, typeOf:"Image", content:""},
  {id:5, typeOf:"Code-Block", content:""},
]

export default function Home() {

  const [Inputs, setInputs] = useState(newBlog)

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <form className="flex flex-col w-full h-full justfy-center text-black gap-5">
        {
          Inputs.map((item, idx) =>
          (
            <InputComponent getParState={Inputs} setParState={setInputs} index={idx} key={"input_" + idx} typeOfInput={item.typeOf} data={item.content} parentStates={Inputs} />
          ))
        }
        <button type="submit">button</button>
      </form>
    </div>
  );
}

type props =
{
    index: number
    data: string
    parentStates: { id: number; typeOf: string; content: string; }[]
    typeOfInput: string
    getParState: {
    id: number;
    typeOf: string;
    content: string;
}[]
    setParState: Dispatch<SetStateAction<{
    id: number;
    typeOf: string;
    content: string;
}[]>>
}
export function InputComponent ({index, typeOfInput, data, getParState, setParState}:props)
{
  let input = <input></input>

  if (typeOfInput == "Title")
  {
    input = (
        <input className="w-full bg-gray-300 h-fit text-4xl" type="text" placeholder="Title">
          
        </input>)
  }
  else if (typeOfInput == "Header")
  {
    input = (
        <input className="w-full bg-gray-300 h-fit text-2xl" type="text" placeholder="Title">
        </input>)
  }
  else if (typeOfInput == "Normal-Text")
  {
    input = (
        <input className="w-full bg-gray-300 h-fit text-lg" type="text" placeholder="Title">
        </input>)
  }
  else if (typeOfInput == "Image")
  {
    input = (
        <input className="w-full bg-gray-300 h-fit" type="text" placeholder="Title">
        </input>)
  }
  else if (typeOfInput == "Code-Block")
  {
    input = (
      <code className="h-60 w-full flex py-10 bg-gray-300">
        <input className="w-full flex" type="text" placeholder="Title">
        </input>
      </code>)
  }

  const moveUp = () =>
  {
    if (index != 0 )
    {
      let newArray = getParState.slice(0, index - 1).concat([getParState[index], getParState[index - 1]], getParState.slice(index + 1))
      setParState(newArray)
    }
  }
  return(
        <div className="w-full flex flex-row items-center gap-4">
          <div className="w-full h-fit">
            {input}
          </div>
          <div className="">
            <button className="" onClick={moveUp}>
              <Image width={20} height={20} src={"/icons/section-control-menu.svg"} alt="section-control-menu" className="pointer-events-none"/>
            </button>
          </div>
        </div>
  )
}
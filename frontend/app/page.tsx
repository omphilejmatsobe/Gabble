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

  const moveUp = (index:number) =>
  {
    if (index != 0 )
    {
      let newArray = Inputs.slice(0, index - 1).concat([Inputs[index], Inputs[index - 1]], Inputs.slice(index + 1))
      setInputs(newArray)
    }
  }

  const addNewSection = () =>
  {
    setInputs([...Inputs, {id:1, typeOf:"Title", content:""}])
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <form className="flex flex-col w-full h-full justfy-center text-black gap-5">
        {
          Inputs.map((item, idx) =>
          (

            <div key={"input_" + idx} className="w-full flex flex-row items-center gap-4">
                <InputComponent index={idx}  typeOfInput={item.typeOf} data={item.content}/>
 
              <div className="">
                <button type="button" className="" onClick={() => moveUp(idx)}>
                  <Image width={20} height={20} src={"/icons/section-control-menu.svg"} alt="section-control-menu" className="pointer-events-none"/>
                </button>
              </div>
            </div>
          ))
        }
        <button type="button" onClick={addNewSection}>button</button>
      </form>
    </div>
  );
}

type props =
{
    index: number
    data: string
    typeOfInput: string

}
export function InputComponent ({index, typeOfInput, data}:props)
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

  return(
          <div className="w-full h-fit">
            {input}
          </div>
  )
}
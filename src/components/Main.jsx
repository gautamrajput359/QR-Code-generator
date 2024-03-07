import React from "react";
import QRCode from "react-qr-code";
import { useState } from "react";

function Main() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [fgColor, setFgColor] = useState("");
  const [size, setSize] = useState();
  const [create, setCreate] = useState(false);

  const handleClick = () => {
    setTitle('')
    setValue('')
    setBgColor('')
    setFgColor('')
    setSize('')
    setCreate(false)
  }

  const handleGenerate = () => {
    if(title.length>0 && value.length>0 && bgColor.length>0 && fgColor.length>0  && size) {
        setCreate(true)
    } else {
        setCreate(false)
    }
  }
  return (
    <>
      <div className="box flex mt-10 justify-center ">
        <div className="qrGenerator bg-[#4361ee] h-[70vh] w-[40vw]">
            <h1 className="text-center font-bold">QR Code Generator</h1>
          <div className="flex flex-col gap-3 flex-wrap mt-4 items-center">
            <input type="text" value={title} placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} className="inputArea h-[5vh] w-[20vw] border border-black rounded-md pl-1" />
            <input type="text" value={value} placeholder="Enter value" onChange={(e) => setValue(e.target.value === "" ? 0 : e.target.value)} className="inputArea h-[5vh] w-[20vw] border border-black rounded-md pl-1" />
            <input type="text" value={bgColor} placeholder="Enter background color" onChange={(e) => setBgColor(e.target.value)} className="inputArea h-[5vh] w-[20vw] border border-black rounded-md pl-1" />
            <input type="text" value={fgColor} placeholder="Enter foreground color" onChange={(e) => setFgColor(e.target.value)} className="inputArea h-[5vh] w-[20vw] border border-black rounded-md pl-1" />
            <input type="text" value={size} placeholder="Enter size" onChange={(e) => setSize(e.target.value)} className="inputArea h-[5vh] w-[20vw] border border-black rounded-md pl-1" />
            <div className="buttons flex gap-4">
            <button onClick={handleGenerate} className="button border bg-black text-white w-[10vw] overflow-hidden rounded-lg">Generate</button>
            <button onClick={handleClick} className="button border bg-black text-white w-[10vw] rounded-lg">Clear All</button>
            </div>
          </div>
          <div className="code mt-4 flex justify-center">
            {create && (
              <QRCode className="h-[20vh] w-auto" title={title} value={value} bgColor={bgColor} fgColor={fgColor} size={{ size }} /> )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

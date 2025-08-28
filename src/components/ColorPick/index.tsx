const ColorPick = ({color, colorHeading, onClick}:ColorPickProps) => {
    return (
        <div className="flex flex-col w-fit border-2 border-black rounded-lg p-4 items-center bg-white gap-1">
            <h2>{colorHeading}:</h2>
            {color && <h2>{color}</h2>}
            <button className="border-1 border-black rounded-md p-2 bg-gray-300 cursor-pointer" onClick={() => onClick()} role="link">Click me!</button>
        </div>
    )
}

export default ColorPick
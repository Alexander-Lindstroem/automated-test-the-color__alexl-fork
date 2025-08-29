'use client'
import ColorPick from "@/components/ColorPick"

const Hex = ({changeColor}:ChangeColorType) => {
    return (
        <ColorPick color="#6BF5B1" colorHeading="HEX Background" onClick={changeColor}/>
    )
}

export default Hex
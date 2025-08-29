'use client'
import ColorPick from "@/components/ColorPick"
import { ChangeColorType } from "@/utils/types"

const Rgb = ({changeColor}:ChangeColorType) => {
    return (
        <ColorPick color='rgb(91, 33, 227)' colorHeading="RGB Background" onClick={changeColor}/>
    )
}

export default Rgb
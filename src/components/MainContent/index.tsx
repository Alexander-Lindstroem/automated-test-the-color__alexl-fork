import Image from "next/image"

const MainContent = () => {
    return (
        <div className="flex w-full max-w-[876px] border-2 border-black rounded-xl p-4 text-sm justify-center ml-auto mr-auto mt-4 mb-4">
            <div className="flex flex-col gap-1 w-fit">
                <h2 className="text-lg font-bold">Color Picker!</h2>
                <h3 className="text-md">This is where some subtitle is supposed to be</h3>
                <Image className="border-2 border-black rounded-xl" src={"/additive-subtractive.png"} alt={"subtractive-color-image"} width={500} height={500}/>
                <h2 className="text-md font-bold">Color Systems</h2>
                <p>A structured method for creating different colors using a set of primary colors and rules for mixing them.</p>
                <h3 className="font-bold">Subtractive color system (commonly used in print and painting)</h3>
                <h3 className="font-bold">(CMYK) (White paper)</h3>
                <ul>
                    <li>Start with white and apply colored pigments that absorb light</li>
                    <li>The result is black when all pigments are mixed</li>
                </ul>
                <h3 className="font-bold">Additive color system (commonly used in electronic displays)</h3>
                <h3 className="font-bold">(RGB) (Black screen)</h3>
                <ul>
                    <li>Starts with black and emits light at different intensities</li>
                    <li>White when red, blue and green are combined in their maximum intensities</li>
                </ul>
                <h2 className="text-md font-bold">Pixel</h2>
                <p>It's made of red, green and blue lights with adjustable intensities (a pixels has 3 panels of light)</p>
                <p>RGB values range from 0 (minimum intensity) - 255 (maximum intensity)</p>
                <p>Color values can be represented in either RGB or hexadecimal notation</p>
                <ul>
                    <li>Red (0 - 255)</li>
                    <li>Green (0 - 255)</li>
                    <li>Blue (0 - 255)</li>
                </ul>
                <h2 className="text-md font-bold">RGB and Hexadecimal notation</h2>
                <p>Color values can be represented in either RGB or hexadecimal notation</p>
                <ul>
                    <li>rgb(152, 116, 249) (RGB)</li>
                    <li>#9874F9 (HEX)</li>
                </ul>
            </div>
        </div>
    )
}

export default MainContent
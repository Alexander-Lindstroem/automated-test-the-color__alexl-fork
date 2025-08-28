const Header = ({setCurrentPage}:HeaderProps) => {
    const handleClick = (argument:string) => {
        setCurrentPage(argument)
    }

    return (
        <header className="flex border-b-black border-b-1 p-5 text-xl justify-around">
            <div>
                <h1>Color Picker</h1>
            </div>
            <div className="select-none flex flex-row gap-4">
                <h2 className="cursor-pointer select-none" onClick={() => handleClick("home")}>HOME</h2>
                <h2 className="cursor-pointer select-none" onClick={() => handleClick("rgb")}>RGB</h2>
                <h2 className="cursor-pointer select-none" onClick={() => handleClick("hex")}>HEX</h2>
            </div>
        </header>
    )
}

export default Header
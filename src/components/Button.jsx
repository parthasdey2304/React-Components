function Button({ content = "null", textColor = "white", textColorIntensity = "0", bgColor = "blue", bgColorIntensity = "600", hasBorder = true, borderWidth = "2px", borderColor = "gray", borderColorIntensity = "100", link = "/" }) {
    return (
        <a 
            href={ link } 
            className={`bg-${bgColor}-${bgColorIntensity} hover:bg-${bgColor}-${parseInt(bgColorIntensity) + 100} duration-300 hover:duration-300 px-4 py-2 text-xl rounded-md font-medium text-${textColor}` + ((textColor == "black" || textColor == "white")? (""):(`-${textColorIntensity} `)) + ((hasBorder == true)? (` border-[${borderWidth}] border-${borderColor}-${borderColorIntensity}]`) : (""))}
        >
            { content }
        </a>
    )
}

export default Button;
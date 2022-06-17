
const Darktoggle = ({ children, className, onClick}) => {
  return (
    <div
    className="`p-2 ${className}`"
    onClick={onClick}
    >{children}</div>
  )
}

export default Darktoggle
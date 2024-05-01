import ArrowDown from "./arrow-down"
import ArrowSmallRight from "./arrow-small-right"
import CartIcon from "./cart-icon"
import ExclamationTriangle from "./exclamation-triangle"
import MinusSmall from "./minus-icon"
import PlusSmall from "./plus-icon"
import Trash from "./trash-icon"
import Xmark from "./x-mark-icon"

type IconName = "arrow-down"|"arrow-small-right"|"cart-icon"|"exclamation-triangle"|"minus-icon"|"plus-icon"|"trash-icon"|"x-mark-icon"

type IconsType ={
    [k in IconName]: JSX.Element
}

type IconProps = {
    name: keyof typeof Icons
}


// Record<IconName, JSX.Element>
const Icons:IconsType={
    "arrow-down":<ArrowDown/>,
    "arrow-small-right":<ArrowSmallRight/>,
    "cart-icon":<CartIcon/>,
    "exclamation-triangle":<ExclamationTriangle/>,
    "minus-icon":<MinusSmall/>,
    "plus-icon":<PlusSmall/>,
    "trash-icon":<Trash/>,
    "x-mark-icon":<Xmark/>,
}

const Icon = ({name="arrow-down"}:IconProps) => {
  return (
    Icons[name]
  )
}

export default Icon
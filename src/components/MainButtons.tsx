import { Button, ButtonSectionLayout, Line, Number } from "../global"
import { PlusOutlined, CloseOutlined, MinusOutlined, PauseOutlined, PercentageOutlined } from "@ant-design/icons"
import { FaSquareRootAlt, FaDivide, FaCircle } from "react-icons/fa"
import { RxReload } from "react-icons/rx"

export const MainButtons = ({ isDark, color, background }:{ isDark: boolean, color: string, background: string }) => {
  const primaryButton = isDark ? 'primary_button_dark' : 'primary_button_light'
  const items = [
    { id: 1, buttons: [
      { label: <>C</>, theme: { className: primaryButton } },
      { label: <FaSquareRootAlt />, theme: { className: primaryButton } },
      { label: <PercentageOutlined />, theme: { className: primaryButton } },
      { label: <FaDivide />, theme: { className: primaryButton } }
    ] },
    { id: 2, buttons: [
      { label: <Number>7</Number> },
      { label: <Number>8</Number> },
      { label: <Number>9</Number> },
      { label: <CloseOutlined />, theme: { className: primaryButton } }
    ] },
    { id: 3, buttons: [
      { label: <Number>4</Number> },
      { label: <Number>5</Number>},
      { label: <Number>6</Number> },
      { label: <MinusOutlined />, theme: { className: primaryButton } }
    ] },
    { id: 4, buttons: [
      { label: <Number>1</Number> },
      { label: <Number>2</Number> },
      { label: <Number>3</Number> },
      { label: <PlusOutlined />, theme: { className: primaryButton } }
    ] },
    { id: 5, buttons: [
      { label: <RxReload className='rxdeg' /> },
      { label: <>0</> },
      { label: <FaCircle className="circle" /> },
      { label: <PauseOutlined className="rotate" />, theme: { className: primaryButton } }
    ] },
  ]
  return <ButtonSectionLayout>
    { items.map(item => (<Line key={item.id}>
      { item.buttons.map((button, index: number) => (<Button
        key={index}
        color={color}
        background={background}
        className={button?.theme?.className}
        style={button.label === null ? { visibility: 'hidden' } : { display: 'flex' }}
      >
        { button.label }
      </Button>)) }
    </Line>)) }
  </ButtonSectionLayout>
}
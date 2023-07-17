import { Button, ButtonSectionLayout, Line } from "../global"
import { PlusOutlined, CloseOutlined, MinusOutlined, PauseOutlined, PercentageOutlined } from "@ant-design/icons"
import { FaSquareRootAlt, FaDivide, FaCircle } from "react-icons/fa"

export const MainButtons = ({ isDark, color, background }:{ isDark: boolean, color: string, background: string }) => {
  const items = [
    { id: 1, buttons: [
      { label: <>C</>, theme: { className: 'dark_button' } },
      { label: <FaSquareRootAlt />, theme: { className: 'dark_button' } },
      { label: <PercentageOutlined />, theme: { className: 'dark_button' } },
      { label: <FaDivide />, theme: { className: 'dark_button' } }
    ] },
    { id: 2, buttons: [{ label: <>7</> }, { label: <>8</> }, { label: <>9</> }, { label: <CloseOutlined />, theme: { className: 'dark_button' } }] },
    { id: 3, buttons: [{ label: <>4</> }, { label: <>5</>}, { label: <>6</> }, { label: <MinusOutlined />, theme: { className: 'dark_button' } }] },
    { id: 4, buttons: [{ label: <>1</> }, { label: <>2</> }, { label: <>3</> }, { label: <PlusOutlined />, theme: { className: 'dark_button' } }] },
    { id: 5, buttons: [{ label: <>0</> }, { label: <FaCircle className="circle" /> }, { label: null }, { label: <PauseOutlined className="rotate" />, theme: { className: 'green_button' } }] },
  ]
  return <ButtonSectionLayout>
    { items.map(item => (<Line key={item.id}>
      { item.buttons.map((button, index: number) => (<Button
        key={index}
        color={color}
        background={background}
        style={button.label === null ? { visibility: 'hidden' } : { display: 'flex' }}
        className={isDark ? button?.theme?.className : ''}
      >
        { button.label }
      </Button>)) }
    </Line>)) }
  </ButtonSectionLayout>
}
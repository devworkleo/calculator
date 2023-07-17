import { CalculatorButtons, CalculatorFlutter, CalculatorLayoyt, Dot, Dots, DotsAndTheme } from "../global"
import { MainButtons } from "./MainButtons"
import { MathArea } from "./MathArea"
import { Switch } from 'antd';
import { useState } from "react"

export const Calculator = () => {
  const [isDark, setIsDark] = useState(true)
  return <CalculatorLayoyt>
    <CalculatorFlutter background={isDark ? '#212B41' : '#F4FDFB'} >
      <DotsAndTheme>
        <Dots>
          { Array.from({ length: 3 }, (_, index: number) => <Dot key={index} />) }
        </Dots>
        <Switch defaultChecked onChange={() => setIsDark(!isDark)} className={isDark ? 'dark_switch': 'light_switch'} />
      </DotsAndTheme>
      <MathArea background={isDark ? '#212B41' : '#F4FDFB'} />
      <CalculatorButtons background={isDark ? '#2E3951' : '#FFFFFF'}>
        <MainButtons
          isDark={isDark}
          color={isDark ? '#F4FDFB ' : '#373E47'}
          background={isDark ? '#2E3951' : '#F4FDFB'}
        />
      </CalculatorButtons>
    </CalculatorFlutter>
  </CalculatorLayoyt>
}
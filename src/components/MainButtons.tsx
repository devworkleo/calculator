import { Button, ButtonSectionLayout, Line } from "../global"

export const MainButtons = () => {
  const items = [
    { id: 1, buttons: [{ label: 'C' }, { label: '√' }, { label: '%' }] },
    { id: 2, buttons: [{ label: '7' }, { label: '8' }, { label: '9' }] },
    { id: 3, buttons: [{ label: '4' }, { label: '5' }, { label: '6' }] },
    { id: 4, buttons: [{ label: '1' }, { label: '2' }, { label: '3' }] },
    { id: 5, buttons: [{ label: '0' }, { label: '.' }, { label: '=' }] },
  ]
  return <ButtonSectionLayout>
    { items.map(item => (<Line key={item.id}>
      { item.buttons.map(button => (<Button key={button.label}>
        { button.label }
      </Button>)) }
    </Line>)) }
  </ButtonSectionLayout>
}
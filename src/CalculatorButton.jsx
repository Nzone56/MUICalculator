import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const operations = ['+', '-', '*', '/', '%']
const WindowsCalculatorButton = styled(Button)(
   ({ equal, delete: isDelete }) => ({
      width: '70px',
      height: '70px',
      fontSize: '18px',
      margin: '2px',
      borderRadius: '5px',
      backgroundColor: equal ? '#373ccf' : isDelete ? '#9b111e' : '#373737',
      color: 'white',
      fontWeight: 'bold',
      boxShadow: '0px 0px 2px 2px rgba(0,0,0,0.75);',
      '&:hover': {
         backgroundColor: equal ? '#483ccf' : isDelete ? '#800000' : '#151515',
         fontWeight: 'bolder',
      },
   })
)
const getResult = (n1, symbol, n2) => {
   let result = 0

   switch (symbol) {
      case '+':
         result = n1 * 1 + n2 * 1
         break
      case '-':
         result = n1 - n2
         break
      case '*':
         result = n1 * n2
         break
      case '/':
         result = n1 / n2
         break
      case '%':
         result = n1 % n2
         break
      default:
         break
   }

   return result
}

const WindowsCalculatorButtonComponent = ({
   label,
   symbol,
   show,
   setShow,
   setProd,
   prod,
   setSymbol,
   isEqual,
   isDelete,
}) => {
   const handleOnClickButton = () => {
      if (label === 'C') {
         setShow('')
         setProd('')
         setSymbol('')
      } else if (label === '=') {
         const ans = getResult(prod, symbol, show)
         ans !== 0 ? setShow(ans) : setShow('')
         setProd(ans)
         setSymbol('')
      } else if (label === '<-') {
         console.log(show.slice(0, -1))
         setShow(show.slice(0, -1))
      } else if (operations.includes(label)) {
         setProd(show)
         setSymbol(label)
         setShow('')
      } else {
         setShow(show + label)
      }
   }
   return (
      <WindowsCalculatorButton
         equal={isEqual}
         delete={isDelete}
         onClick={handleOnClickButton}
         variant="contained"
      >
         {label}
      </WindowsCalculatorButton>
   )
}

export default WindowsCalculatorButtonComponent

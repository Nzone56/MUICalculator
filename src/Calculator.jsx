import { Box, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import WindowsCalculatorButtonComponent from './CalculatorButton'

export const Calculator = () => {
   const [show, setShow] = useState('')
   const [prod, setProd] = useState()
   const [symbol, setSymbol] = useState('')

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#111111',
            padding: '15px',
            borderRadius: '5px',
            maxWidth: '350px',
            width: '350px',
         }}
      >
         <Box>
            <Typography
               variant="h4"
               gutterBottom
               sx={{
                  textAlign: 'right',

                  color: 'white',
                  opacity: '0.5',
               }}
            >
               {prod ? prod + symbol : '0'}
            </Typography>
            <Typography
               variant="h4"
               gutterBottom
               sx={{ textAlign: 'right', padding: '5px', color: 'white' }}
            >
               {show || '0'}
            </Typography>
         </Box>
         <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Grid
               container
               sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 0.5,
               }}
            >
               {[
                  { label: '', specialProps: {} },
                  { label: 'C', specialProps: {} },
                  { label: '%', specialProps: {} },
                  { label: '<-', specialProps: { isDelete: true } },
                  { label: '7', specialProps: {} },
                  { label: '8', specialProps: {} },
                  { label: '9', specialProps: {} },
                  { label: '/', specialProps: {} },
                  { label: '4', specialProps: {} },
                  { label: '5', specialProps: {} },
                  { label: '6', specialProps: {} },
                  { label: '*', specialProps: {} },
                  { label: '1', specialProps: {} },
                  { label: '2', specialProps: {} },
                  { label: '3', specialProps: {} },
                  { label: '-', specialProps: {} },
                  { label: '.', specialProps: {} },
                  { label: '0', specialProps: {} },
                  { label: '=', specialProps: { isEqual: true } },
                  { label: '+', specialProps: {} },
               ].map((button, index) => (
                  <Grid item key={index}>
                     <WindowsCalculatorButtonComponent
                        symbol={symbol}
                        label={button.label}
                        show={show}
                        setShow={setShow}
                        setSymbol={setSymbol}
                        prod={prod}
                        setProd={setProd}
                        {...button.specialProps}
                     />
                  </Grid>
               ))}
            </Grid>
         </Box>
      </Box>
   )
}

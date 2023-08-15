import { Box, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import WindowsCalculatorButtonComponent from './CalculatorButton'

export const Calculator = () => {
   const [show, setShow] = useState('')
   const [prod, setProd] = useState()
   const [symbol, setSymbol] = useState('')

   const handleOnClickResult = () => {}
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
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={''}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'C'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'%'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'<-'}
                     show={show}
                     setShow={setShow}
                     isDelete={true}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'7'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'8'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'9'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'/'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'4'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'5'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'6'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'*'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'1'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'2'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'3'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'-'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'.'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'0'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'='}
                     show={show}
                     setShow={setShow}
                     isEqual={true}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                     onClick={handleOnClickResult}
                  />
               </Grid>
               <Grid item>
                  <WindowsCalculatorButtonComponent
                     symbol={symbol}
                     label={'+'}
                     show={show}
                     setShow={setShow}
                     setSymbol={setSymbol}
                     prod={prod}
                     setProd={setProd}
                  />
               </Grid>
            </Grid>
         </Box>
      </Box>
   )
}

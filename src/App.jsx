import { Box, Typography } from '@mui/material'
import { Calculator } from './Calculator'

function App() {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            background:
               'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
         }}
      >
         <Typography mb={4} variant="h2">
            CALCULATOR
         </Typography>
         <Calculator />
      </Box>
   )
}

export default App

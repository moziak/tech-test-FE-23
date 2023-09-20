import { ThemeProvider } from 'styled-components'
import { Payout } from './app/features/payouts/payout'


function App() {
  return (
    <ThemeProvider theme={{}}>
      <Payout />
    </ThemeProvider>
  )
}
export default App

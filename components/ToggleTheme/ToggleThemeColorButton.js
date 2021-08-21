import { Button, useColorMode } from '@chakra-ui/react'
import NightIcon from '../icons/NightIcon'
import SunIcon from '../icons/SunIcon'

const ToggleThemeColorButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (

            <Button aria-label="themeModeToggle" variant="link" onClick={toggleColorMode}>
                {colorMode === 'light' ? <NightIcon /> : <SunIcon />}
            </Button>
  )
}

export default ToggleThemeColorButton

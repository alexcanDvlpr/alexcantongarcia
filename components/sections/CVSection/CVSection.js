import { Button } from '@chakra-ui/button'
import { DownloadIcon } from '@chakra-ui/icons'
import { Heading } from '@chakra-ui/layout'
import * as ga from '../../../lib/ga'

const CVSection = () => {
  const handleClickDownloadCV = () => {
    ga.event({
      action: 'download_cv',
      category: 'jobs',
      label: 'Download CV',
      value: 'Downloading CV'
    })
  }

  return (
    <div className="cvSection">
      <Heading as="h2" size="xl" mb={1} color="gray.700">¿Quieres saber más sobre mí o </Heading>
      <Heading as="h2" size="xl" mb={8} color="gray.700">ver si puedo encajar en tu equipo?</Heading>

      <a href="/cv/cv_alexcanton.pdf" download>
        <Button onClick={handleClickDownloadCV} leftIcon={<DownloadIcon />} colorScheme='teal' size="lg" variant='solid'>
          Descarga mi CV
        </Button>
      </a>
    </div>
  )
}

export default CVSection

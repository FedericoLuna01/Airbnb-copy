'use client'

import { useRouter } from "next/navigation"
import Heading from "./Heading"
import Button from "./Button"

interface EmptyStateProps {
  title?: string
  subtitle?: string
  showReset?: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({ title = 'No hay resultados', subtitle = 'Prueba cambiando alguna propiedad', showReset }) => {
  const router = useRouter()

  return ( 
    <div
      className="h-[60vh] flex flex-col gap-2 items-center justify-center"
    >
      <Heading 
        title={title}
        subtitle={subtitle}
        center
      />
      <div
        className="w-48 mt-4"
      >
        {showReset && (
          <Button 
            outline
            label='Resetear filtros'
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
   );
}
 
export default EmptyState;
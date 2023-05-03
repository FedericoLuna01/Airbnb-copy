'use client'

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
  error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.log(error)
  }, [error])
  
  return ( 
    <EmptyState 
      title='Error'
      subtitle='Algo salio mal. Intenta recargar la pagina.'
    />
   );
}
 
export default ErrorState;
import { Loader2 } from "lucide-react"
import { Button } from "../button"
import { cn } from "@/lib/utils"


const ButtonLoading = ({ type, text, loading, className, onClick , ...props}) => {
  return (
    <Button type={type} disabled={loading} onClick={onClick}className={cn("", className)} {...props}>
      {loading && (
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
      )}
      {text}
    </Button>
  )
}

export default ButtonLoading
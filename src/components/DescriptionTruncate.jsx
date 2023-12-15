import { useState } from "react"
import { Button } from "react-bootstrap"

export default function DescriptionTruncate({ description }) {

  const [clamped, setClamped] = useState(true)
  const [showButton, setShowButton] = useState(true)

  const handleClick = () => {
    setClamped(!clamped)
  }

  return (
    <>
      <div 
        className={"long-text" + (clamped && "clamp")}
        >
          {description}
      </div>
      {showButton && (
        <Button 
          variant="outline-secondary"
          size="sm"
          onClick={handleClick}
          >
            {clamped ? "more..." : "...less"}
        </Button>
      )}  
    </>
  )
}

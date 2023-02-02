
export interface TextProps {
  text?: string
  className?: string
}

export const H2 = ({text, className}: TextProps) => {
  return (
    <h2 className={`${className} font-serif text-lg`}>{text}</h2>
  )
}
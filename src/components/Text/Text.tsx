export interface TextProps {
  text?: string
  className?: string
}

export const H2 = ({ text, className }: TextProps) => {
  return <h2 className={`${className} font-serif text-lg`}>{text}</h2>
}

export const H3 = ({ text, className }: TextProps) => {
  return <h3 className={`${className} text-md font-serif`}>{text}</h3>
}

export const P1 = ({ text, className }: TextProps) => {
  return <p className={`${className} font-sans-serif text-lg`}>{text}</p>
}

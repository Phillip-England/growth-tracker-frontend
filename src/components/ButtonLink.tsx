import { Link } from "react-router-dom"

interface ButtonLinkProps {
  text?: string
  to: string
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  text,
}: ButtonLinkProps) => {
  return (
    <Link to={to}>
      <button className="bg-black p-2 text-white">{text}</button>
    </Link>
  )
}

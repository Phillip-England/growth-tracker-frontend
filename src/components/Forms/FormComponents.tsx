import React from "react"

interface TextProps {
  text?: string
}

export const FormTitle: React.FC<TextProps> = (props: TextProps) => {
  return <h2 className="pb-4 text-xl">{props.text}</h2>
}

export const FormError: React.FC<TextProps> = (props: TextProps) => {
  return <p className="text-md pb-4 text-red-700">{props.text}</p>
}

interface LabelProps {
  htmlFor?: string
  text?: string
}

export const FormLabel: React.FC<LabelProps> = (props: LabelProps) => {
  return (
    <label className="text-md pb-1" htmlFor={props.htmlFor}>
      {props.text}
    </label>
  )
}

interface TextInputProps {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
}

export const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  return (
    <input
      type="text"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      className="mb-4 rounded-sm border border-solid border-black p-1"
    />
  )
}

export const FormLoader: React.FC = () => {
  return (
    <div className="mr-5 h-8 w-8 animate-spin self-center rounded-full border-4 border-solid border-gray-400 border-t-black"></div>
  )
}

interface FormSubmitProps {
  text?: string
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
}

export const FormSubmit: React.FC<FormSubmitProps> = (
  props: FormSubmitProps
) => {
  return (
    <input
      type="submit"
      value={props.text}
      onClick={props.onClick}
      className="mt-2 rounded-sm bg-black py-1 px-3 text-white"
    />
  )
}

import { Button } from '@material-tailwind/react'

interface PrimaryButtonProps {
  title: string
  bgColor: string
}

const PrimaryButton = ({ title, bgColor }: PrimaryButtonProps) => {
  console.log(title, bgColor)
  return (
    <section>
      <Button className={`btn41-43 btn-41 px-10 py-2 ${bgColor}`}>
        {title}{' '}
      </Button>
    </section>
  )
}

export default PrimaryButton

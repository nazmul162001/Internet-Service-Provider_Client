interface PrimaryButtonProps {
  title: string
  bgColor: string
}

const PrimaryButton = ({ title, bgColor }: PrimaryButtonProps) => {
  // console.log(title, bgColor)
  return (
    <section>
      <button className={`btn41-43 btn-41 w-48 py-3 md:py-2 ${bgColor}`}>
        {title}{' '}
      </button>
    </section>
  )
}

export default PrimaryButton

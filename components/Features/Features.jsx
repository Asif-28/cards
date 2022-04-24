import FeatureCard from './FeatureCard'

const data = [
  {
    id: 1,
    name: 'lauda',
    para: 'Simplify your processes.Low service free online donation platform for npn-profit organisations. ',
  },
  {
    id: 2,
    name: 'lauda',
    para: 'Simplify your processes.Low service free online donation platform for npn-profit organisations. ',
  },
  {
    id: 3,
    name: 'lauda',
    para: 'Simplify your processes.Low service free online donation platform for npn-profit organisations. ',
  },
  {
    id: 4,
    name: 'lauda',
    para: 'Simplify your processes.Low service free online donation platform for npn-profit organisations. ',
  },
  {
    id: 5,
    name: 'lauda',
    para: 'Simplify your processes.Low service free online donation platform for npn-profit organisations. ',
  },
  {
    id: 6,
    name: 'lauda',
    para: 'Simplify your processes.Low service free online donation platform for npn-profit organisations. ',
  },
]

const Features = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-12">
        {data.map(({ id, name, para }) => (
          <FeatureCard key={id} name={name} para={para} />
        ))}
      </div>
    </div>
  )
}

export default Features

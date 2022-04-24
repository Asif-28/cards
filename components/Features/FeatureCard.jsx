const FeatureCard = ({ name, para }) => {
  return (
    <div className="max-w-xl rounded-sm border bg-gray-200 shadow-lg">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="text-lg font-medium">{name}</div>
        <p className="">{para}</p>
      </div>
    </div>
  )
}

export default FeatureCard

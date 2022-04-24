const FeatureCard = ({ name, para }) => {
  return (
    <div className="max-w-2xl rounded-sm border bg-gray-200 shadow-lg duration-200 hover:bg-gray-300 hover:shadow-xl">
      <div className="flex flex-col items-center justify-center space-y-4 px-8 py-4">
        <div className="text-lg font-medium">{name}</div>
        <p className="">{para}</p>
      </div>
    </div>
  )
}

export default FeatureCard

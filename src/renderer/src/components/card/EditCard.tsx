const EditCard = () => {
  return (
    <>
      <button className="flex mb-6">
        <div className="bg-white w-20 h-16 rounded relative">
          <div className="absolute bg-white w-16 h-16 rounded top-1 left-2"></div>
        </div>
        <div className="flex flex-col text-sm ml-4">
          <div>Session</div>
          <div>Goal</div>
          <div>12AM</div>
        </div>
      </button>
    </>
  )
}

export default EditCard

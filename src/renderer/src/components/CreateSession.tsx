const CreateSession = () => {
  return (
    <>
      <div className="bg-gradient-to-tr from-[#020414] to-[#1C1B1F] h-12 w-full flex rounded-tr-md border-b border-[#1C1B1F]">
        <button className="mx-10 divide-y-2 divide-y-reverse underline underline-offset-[1rem] decoration-[#591DDD] ">
          Create
        </button>
        <button onClick={() => onSelectSession('edit')}>Edit</button>
      </div>
      <div>Create Session</div>
      <br />
      <div>Templates :</div>
      <div>Work Time</div>
      <div>Sport</div>
    </>
  )
}

export default CreateSession

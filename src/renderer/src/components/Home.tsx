const Home = () => {
  // Just a dummy data
  const liveSession = 'Session 1'
  const upcomingSession = 'Session 2'

  const time = '10:00 AM - 11:00 AM'

  const goal = 'Goal: Learn about React'

  const date = '2024-05-31'
  const start = 'Starting : 12 hours'

  return (
    <>
      {liveSession ? (
        <>
          <span className="flex justify-center mt-5">Live Session</span>
          <span className="flex justify-center mt-2">{liveSession}</span>
          <span className="flex justify-center mt-2">{goal}</span>
          <div className="flex justify-center mt-2">
            <button className="btn"></button>
            {time}
            <button className="btn"></button>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-5">No Live Session</div>
      )}
      <span className="flex items-center">
        <span className="h-px flex-1 bg-black"></span>

        <span className="h-px flex-1 bg-black"></span>
      </span>

      {upcomingSession ? (
        <>
          <span className="flex justify-center mt-5">Upcoming</span>
          <span className="flex justify-center mt-2">{upcomingSession}</span>
          <span className="flex justify-center mt-2">{goal}</span>
          <span className="flex justify-center mt-2">{date}</span>
          <span className="flex justify-center mt-2">{start}</span>
        </>
      ) : (
        <div className="flex justify-center mt-5">Nothing to Come</div>
      )}
    </>
  )
}

export default Home

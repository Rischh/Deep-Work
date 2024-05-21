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
          <div className="bg-slate-500 rounded-lg min-h-40 mx-6 ">
            <span className="flex justify-center mt-5">Live Session</span>
            <span className="flex justify-center mt-2">{liveSession}</span>
            <span className="flex justify-center mt-2">{goal}</span>
            <div className="flex justify-center mt-2">
              <button className="btn"></button>
              {time}
              <button className="btn"></button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-6">No Live Session</div>
      )}

      {upcomingSession ? (
        <>
          <div className="bg-slate-500 rounded-lg min-h-40 mx-2  ">
            <span className="flex justify-center mt-5 ">Upcoming</span>
            <span className="flex justify-center mt-2">{upcomingSession}</span>
            <span className="flex justify-center mt-2">{goal}</span>
            <span className="flex justify-center mt-2">{date}</span>
            <span className="flex justify-center mt-2">{start}</span>
          </div>
        </>
      ) : (
        <div className="flex justify-center mt-6">Nothing to Come</div>
      )}

      <div className="flex justify-center mt-6 bg-slate-500 rounded-lg min-h-64 mx-2">
        Strategic Indicator
      </div>
    </>
  )
}

export default Home

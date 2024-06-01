import { Card, Navbar } from './'

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
      <Navbar>
        {liveSession ? (
          <div className="w-full flex justify-center items-center ">
            <span className="bg-red-500 px-2 py-1 rounded">Live Session !</span>
          </div>
        ) : (
          <span className="w-full flex justify-center items-center ">No Live Session</span>
        )}
      </Navbar>
      <div className="p-5">
        <div className="mb-20">
          {liveSession ? (
            <Card>
              <div className="p-4">
                <div className="flex justify-center">{liveSession}</div>
                <div className="flex justify-center mt-2">{goal}</div>
                <div className="flex justify-center mt-2">
                  <button className="bg-[#591DDD] w-4 p-4 rounded-3xl"></button>
                  {time}
                  <button className="bg-[#591DDD] w-4 p-4 rounded-3xl"></button>
                </div>
              </div>
            </Card>
          ) : null}
        </div>
        {upcomingSession ? (
          <Card>
            <div className="p-4">
              <span className="flex justify-center">Upcoming</span>
              <span className="flex justify-center mt-2">{upcomingSession}</span>
              <span className="flex justify-center mt-2">{goal}</span>
              <span className="flex justify-center mt-2">{date}</span>
              <span className="flex justify-center mt-2">{start}</span>
            </div>
          </Card>
        ) : (
          <div className="flex justify-center mt-6">Nothing to Come</div>
        )}
      </div>
    </>
  )
}

export default Home

import Navbar from './Navbar'
import Card from './card/Card'

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
          <span className="w-full flex justify-center items-center ">Live Session</span>
        ) : (
          <span className="w-full flex justify-center items-center ">No Live Session</span>
        )}
      </Navbar>
      <div className="p-5">
        <div className="mb-20">
          {liveSession ? (
            <Card>
              <div className="flex justify-center mt-2">{liveSession}</div>
              <div className="flex justify-center mt-2">{goal}</div>
              <div className="flex justify-center mt-2">
                <button className="btn bg-[#591DDD]"></button>
                {time}
                <button className="btn bg-[#591DDD]"></button>
              </div>
            </Card>
          ) : null}
        </div>
        {upcomingSession ? (
          <Card>
            <span className="flex justify-center mt-5 ">Upcoming</span>
            <span className="flex justify-center mt-2">{upcomingSession}</span>
            <span className="flex justify-center mt-2">{goal}</span>
            <span className="flex justify-center mt-2">{date}</span>
            <span className="flex justify-center mt-2">{start}</span>
          </Card>
        ) : (
          <div className="flex justify-center mt-6">Nothing to Come</div>
        )}
      </div>
    </>
  )
}

export default Home

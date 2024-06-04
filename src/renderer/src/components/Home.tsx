import { Navbar } from './'

const Home = () => {
  // Just a dummy data
  const liveSession = 'Session 1'
  const upcomingSession = 'Session 2'

  const time = '10:00 - 11:00 '

  const goal = `Goal: Learn about React`

  const date = '2024-05-31'
  const start = `(Starting : 12 hours)`

  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col items-center p-10">
        {liveSession ? (
          <>
            <div className="flex">
              <div className="w-8 h-8 bg-[#dd1d5a] live-shadow rounded-md">
                <div className="relative top-2.5 left-2.5 w-3 h-3 bg-slate-50 rounded-full"></div>
              </div>
              <div className="font-extrabold text-2xl ml-4">Live</div>
            </div>
            <h2 className="text-lg font-bold mt-5">{liveSession}</h2>
            <div className="mt-2">{goal}</div>
            <div className="flex mt-2">
              <button className="bg-[#591DDD] w-4 p-4 rounded-3xl"></button>
              <div className="mx-5 pt-1">{time}</div>
              <button className="bg-[#591DDD] w-4 p-4 rounded-3xl"></button>
            </div>
          </>
        ) : (
          <div className="w-full flex justify-center items-center ">No Live Session</div>
        )}
        {upcomingSession ? (
          <>
            <h1 className="mt-20 font-extrabold text-2xl">Upcoming (5)</h1>
            <h2 className="mt-5 font-bold text-lg">{upcomingSession}</h2>
            <div className="mt-2">{goal}</div>
            <div className="mt-2">{date}</div>
            <div className="mt-2 text-xs">{start}</div>
          </>
        ) : (
          <div className="flex justify-center mt-6">Nothing to Come</div>
        )}
      </div>
    </>
  )
}

export default Home

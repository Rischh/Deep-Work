const UserSettings = () => {
  const login = 'Login only with your email'

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="text-6xl text-slate-50  font-extrabold tracking-tight mt-10">
            Welcome on Deep Work
          </div>
          <h2 className="text-xl flex justify-center mt-9 text-slate-300">{login}</h2>
          <div className="flex justify-center ">
            <div className="bg-slate-50 w-72 h-52 rounded p-3 flex flex-col items-center justify-center">
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs bg-slate-50 text-slate-900"
              />
              <button className="mt-2 rounded bg-slate-400 text-slate-50 border-slate-400 hover:bg-slate-500 hover:border-slate-500 w-full py-3">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSettings

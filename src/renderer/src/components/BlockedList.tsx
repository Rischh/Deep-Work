const BlockedList = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <form>
        <input
          type="url"
          id="url"
          className=" mt-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 w-full   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-900"
          placeholder="ex : www.website.com"
          required
        />
      </form>
    </div>
  )
}

export default BlockedList

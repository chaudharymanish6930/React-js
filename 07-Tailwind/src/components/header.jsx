const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white px-6 py-4">
      <h2 className="text-xl font-semibold">Github Analyzer</h2>

      <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition">
        Login
      </button>
    </div>
  )
}

export default Header
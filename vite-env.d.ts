import React, { useEffect, useState } from 'react'
import { Globe } from 'lucide-react'

const App: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string>('')

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(error => console.error('Error fetching IP address:', error))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">MY IP</h1>
      </header>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <div className="flex items-center mb-4">
          <Globe className="text-gray-500 mr-2" />
          <span className="text-gray-800 text-lg">Your IP Address</span>
        </div>
        <p className="text-2xl font-semibold text-gray-700">{ipAddress}</p>
      </div>
      <footer className="mt-8 text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} MY IP. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App

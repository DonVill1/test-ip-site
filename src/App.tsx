import React, { useEffect, useState } from 'react'
import { Globe } from 'lucide-react'

const App: React.FC = () => {
  const [ipv4Address, setIpv4Address] = useState<string>('')
  const [ipv6Address, setIpv6Address] = useState<string>('')

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIpv4Address(data.ip))
      .catch(error => console.error('Error fetching IPv4 address:', error))

    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIpv6Address(data.ip))
      .catch(error => console.error('Error fetching IPv6 address:', error))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">MY IP</h1>
      </header>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full space-y-4">
        <div className="flex items-center">
          <Globe className="text-gray-500 mr-2" />
          <span className="text-gray-800 text-lg">IPv4 Address</span>
        </div>
        <p className="text-2xl font-semibold text-gray-700">{ipv4Address}</p>
        <div className="flex items-center">
          <Globe className="text-gray-500 mr-2" />
          <span className="text-gray-800 text-lg">IPv6 Address</span>
        </div>
        <p className="text-2xl font-semibold text-gray-700">{ipv6Address}</p>
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

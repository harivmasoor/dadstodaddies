import Header from '../../components/Header'

export default function Story() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header />
      <h1 className="text-5xl font-bold mb-12 text-center text-blue-800">My Journey: From Athlete to Dungeon Dweller (A.K.A a SWE) </h1>
      
      <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Move to the Bay</h2>
        <p className="text-xl mb-6 text-gray-700 leading-relaxed">
          During highschool I played many sports multiple times a day, rushing from pre-school activities to during school training and then after school training. University changed things and I became less active. 
          <span className="font-bold text-red-600">For adulthood I found myself entering a new level of low-activity.</span>
          Recently moving to the Bay Area to pursue a SWE career I have found myself solidly planted in-front of the computer screen for most waking hours in a day.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">The Turning Point</h2>
        <p className="text-xl mb-6 text-gray-700 leading-relaxed">
          To avoid <span className="font-bold">looking like a Discord moderator</span>. I am joining Hari for a 90-day challenge to get fitter.
        </p>
      </div>

      <div className="bg-blue-800 text-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Transformation</h2>
        <p className="text-xl mb-6">
          This journey isn't just about losing weight or getting fit. It's about reclaiming our vitality, setting a positive example, and being the best fathers we can be.
        </p>
        <p className="text-2xl font-bold text-yellow-300 mb-6">
          Together, we can build healthier families and stronger communities, one dad at a time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="https://discord.gg/BK4zkTEN" className="btn btn-discord w-full sm:w-auto text-center">Join our Discord</a>
          <a href="https://x.com/i/communities/1836602551300735382" className="btn btn-primary w-full sm:w-auto text-center">Join X Community</a>
        </div>
      </div>
    </div>
  )
}
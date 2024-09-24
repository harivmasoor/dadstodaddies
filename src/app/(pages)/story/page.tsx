import Header from '../../components/Header'
import Image from 'next/image'

export default function Story() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header />
      <h1 className="text-5xl font-bold mb-12 text-center text-blue-800">My Journey: From Dad to Daddy</h1>
      
      <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">The Wake-Up Call</h2>
        <p className="text-xl mb-6 text-gray-700 leading-relaxed">
          As a new father, I found myself caught in the whirlwind of parenthood. <span className="font-bold text-red-600">Late-night feedings, endless diaper changes, and the constant worry about my child's well-being</span> left little time for self-care. Before I knew it, <span className="italic">the pounds had piled on, and my energy levels hit rock bottom</span>.
        </p>
        <p className="text-xl mb-6 text-gray-700 leading-relaxed">
          It's <span className="font-bold">frighteningly easy for fathers to let themselves go</span>. We often put our families first, neglecting our own health in the process. But I realized that by doing so, I wasn't just hurting myself—I was setting a poor example for my child.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">The Turning Point</h2>
        <p className="text-xl mb-6 text-gray-700 leading-relaxed">
          That's when I decided: <span className="font-bold text-green-600">today, we turn it around</span>. I created Dads To Daddies
          <Image src="/drool.png" alt="Drool" width={25} height={25} className="inline ml-1" />
          , a supportive community where fathers can come together to share experiences, motivate each other, and work towards healthier lifestyles.
        </p>
        <p className="text-xl mb-6 text-gray-700 leading-relaxed">
          Our mission is simple: <span className="font-bold">to empower dads to prioritize their health without sacrificing their role as fathers</span>. We believe that by taking care of ourselves, we become better parents and role models for our children.
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
import Header from '../../components/Header'

export default function Story() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Header />
      <h1 className="text-4xl font-bold mb-8">My Story</h1>
      <div className="prose lg:prose-xl">
        <p>
          As a new father, I found myself struggling with weight gain and the challenges of balancing parenthood with personal health. This journey inspired me to create Dads2Daddies, a supportive community where fathers can come together to share experiences, motivate each other, and work towards healthier lifestyles.
        </p>
        <p>
          Our mission is simple: to empower dads to prioritize their health without sacrificing their role as fathers. We believe that by taking care of ourselves, we become better parents and role models for our children.
        </p>
        <p>
          Join us in this transformative journey. Together, we can build healthier families and stronger communities, one dad at a time.
        </p>
      </div>
    </div>
  )
}
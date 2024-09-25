import Header from '../../components/Header'
import Image from 'next/image'
import Link from 'next/link'

interface AppItem {
  id: number;
  name: string;
  imageUrl: string;
  url: string;
  blurb: string;
}

const appStack: AppItem[] = [
  { id: 1, name: "Zero App", imageUrl: "/zero-app.png", url: "https://www.zerofasting.com/", blurb: "Intermittent fasting tracker" },
  { id: 2, name: "Strava", imageUrl: "/strava.png", url: "https://www.strava.com/", blurb: "Activity tracking and social fitness network" },
  { id: 3, name: "Volt", imageUrl: "/volt.png", url: "https://www.voltathletics.com/", blurb: "AI-powered strength training" },
  { id: 4, name: "Spotify", imageUrl: "/spotify.png", url: "https://www.spotify.com/", blurb: "Music streaming for workout motivation" },
  { id: 5, name: "X", imageUrl: "/x.png", url: "https://twitter.com/", blurb: "Social media for fitness community engagement" },
  { id: 6, name: "Fit Radio", imageUrl: "/fit-radio.png", url: "https://www.fitradio.com/", blurb: "Workout music app" },
  { id: 7, name: "Apple Health", imageUrl: "/apple-health.png", url: "https://www.apple.com/health/", blurb: "Centralized health data hub connecting various health and fitness apps" },
  { id: 8, name: "Renpho", imageUrl: "/renpho.png", url: "https://renpho.com/", blurb: "Smart scale for weight and body composition tracking" },
]

function AppStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {appStack.map(app => (
        <div key={app.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
          <div className="flex-grow">
            <div className="w-32 h-32 mx-auto mb-4 relative">
              <Image 
                src={app.imageUrl} 
                alt={app.name} 
                layout="fill" 
                objectFit="contain"
              />
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">{app.name}</h2>
            <p className="text-gray-600 mb-4 text-center h-20 overflow-y-auto">{app.blurb}</p>
          </div>
          <Link 
            href={app.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary w-full text-center mt-auto"
          >
            Visit {app.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default function AppStackPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header />
      <h1 className="text-4xl font-bold mb-8 text-center">My Beating Obesity App Stack</h1>
      <p className="text-center mb-8 text-lg">
        These are the apps that have been instrumental in my journey. 
        <strong>Note: None of these apps are sponsored.</strong>
      </p>
      <AppStack />
    </div>
  )
}

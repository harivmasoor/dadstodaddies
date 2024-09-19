import Header from '../../components/Header'
import Image from 'next/image'

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header />
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Image 
          src="/arnold.png" 
          alt="Wise words from Schwarzenegger-Sama" 
          width={600} 
          height={400} 
          className="w-full h-auto object-cover mb-2 rounded" 
        />
        <p className="text-sm text-gray-500">September 18, 2023</p>
        <p className="text-lg font-semibold">Wise words from Schwarzenegger-Sama</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Image 
          src="/littlegymnast.png" 
          alt="No Mountain High Enough" 
          width={600} 
          height={400} 
          className="w-full h-auto object-cover mb-2 rounded" 
        />
        <p className="text-sm text-gray-500">September 19, 2023</p>
        <p className="text-lg font-semibold">No Mountain High Enough</p>
      </div>
    </div>
  )
}

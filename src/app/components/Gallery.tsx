import Image from 'next/image'

interface GalleryItem {
  id: number;
  imageUrl: string;
  date: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, imageUrl: '/arnold.png', date: '2024-09-18', caption: 'Wise words from Schwarzenegger-Sama' },
  { id: 2, imageUrl: '/littlegymnast.png', date: '2024-09-19', caption: 'No Mountain High Enough' },
  { id: 3, imageUrl: '/goatdog.png', date: '2024-09-20', caption: 'GOATED Running Buddy' },
  { id: 4, imageUrl: '/onefoot.png', date: '2024-10-1', caption: 'One Foot At A Time' },
  // Add more items as needed
]

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {galleryItems.map(item => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
          <Image src={item.imageUrl} alt={item.caption} width={300} height={200} className="w-full h-48 object-cover mb-2 rounded" />
          <p className="text-sm text-gray-500">{item.date}</p>
          <p className="text-lg font-semibold">{item.caption}</p>
        </div>
      ))}
    </div>
  )
}

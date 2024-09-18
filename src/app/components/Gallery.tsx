'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryItem {
  id: number;
  imageUrl: string;
  date: string;
  caption: string;
}

const initialGalleryItems: GalleryItem[] = [
  { id: 1, imageUrl: '/path/to/image1.jpg', date: '2023-09-01', caption: 'Starting my fitness journey' },
  { id: 2, imageUrl: '/path/to/image2.jpg', date: '2023-10-15', caption: 'One month progress' },
  // Add more initial items as needed
]

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGalleryItems)
  const [newItem, setNewItem] = useState({ imageUrl: '', date: '', caption: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewItem(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newItem.imageUrl && newItem.date && newItem.caption) {
      setGalleryItems(prev => [...prev, { ...newItem, id: Date.now() }])
      setNewItem({ imageUrl: '', date: '', caption: '' })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-8 p-4 bg-white rounded-lg shadow-md">
        <input
          type="text"
          name="imageUrl"
          value={newItem.imageUrl}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={newItem.date}
          onChange={handleInputChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <textarea
          name="caption"
          value={newItem.caption}
          onChange={handleInputChange}
          placeholder="Caption"
          className="w-full mb-2 p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add New Item
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <Image src={item.imageUrl} alt={item.caption} width={300} height={200} className="w-full h-48 object-cover mb-2 rounded" />
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="text-lg font-semibold">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

import Header from '../../components/Header'
import Gallery from '../../components/Gallery'

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header />
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      <Gallery />
    </div>
  )
}

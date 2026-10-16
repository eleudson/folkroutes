interface ImageItem {
  id: number
  fileName: string
  originalName: string
  mimeType: string
  size: number
  url: string
}

interface Attractive {
  id: number
  name: string
  description: string
}

interface ImagesProps {
  attractive: Attractive
  images: ImageItem[]
}

export default function Images({ attractive, images }: ImagesProps) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-1">Galeria de Imagens</h1>
      <p className="text-gray-600 mb-6">{attractive.name}</p>

      {images && images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <img
                src={img.url}
                alt={img.originalName}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <p className="text-xs text-gray-500 truncate">{img.originalName}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-lg">
          Nenhuma imagem cadastrada para este atrativo.
        </div>
      )}
    </div>
  )
}

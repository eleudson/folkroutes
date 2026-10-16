import { Head, Link } from '@inertiajs/react'

interface ImageItem {
  id: number
  url: string
  originalName: string
}

interface Attractive {
  id: number
  name: string
  description: string
  type?: { name: string }
  images?: ImageItem[]
}

interface Locality {
  id: number
  name: string
  description: string | null
  attractives?: Attractive[]
}

export default function Show({ locality }: { locality: Locality }) {
  return (
    <>
      <Head title={locality.name} />

      <div className="container mx-auto p-6 max-w-5xl">
        {/* Detalhes da Localidade */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">{locality.name}</h1>
          <p className="text-gray-600 leading-relaxed">
            {locality.description || 'Nenhuma descrição informada.'}
          </p>
        </div>

        {/* Lista de Atrativos da Localidade */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Atrativos em {locality.name}
        </h2>

        {locality.attractives && locality.attractives.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locality.attractives.map((attr) => (
              <div key={attr.id} className="bg-white rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition">
                {attr.images && attr.images.length > 0 ? (
                  <img
                    src={attr.images[0].url}
                    alt={attr.name}
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                    Sem imagem
                  </div>
                )}

                <div className="p-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    {attr.type?.name || 'Atrativo'}
                  </span>
                  <h3 className="font-bold text-lg mt-1 mb-2 text-gray-800">{attr.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{attr.description}</p>
                  
                  <Link
                    href={`/attractives/${attr.id}`}
                    className="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    Ver detalhes →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-xl border">
            Nenhum atrativo cadastrado para esta localidade ainda.
          </div>
        )}
      </div>
    </>
  )
}

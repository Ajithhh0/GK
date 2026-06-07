interface ImagePlaceholderProps {
  label?: string
  className?: string
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide'
  icon?: string
}

const ratioClasses = {
  square:   'aspect-square',
  video:    'aspect-video',
  portrait: 'aspect-[3/4]',
  wide:     'aspect-[16/5]',
}

export default function ImagePlaceholder({
  label = 'Image',
  className = '',
  aspectRatio = 'video',
  icon = '🖼️',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${ratioClasses[aspectRatio]} bg-gradient-to-br from-primary-100 via-primary-50 to-green-100 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-primary-200 text-primary-400 ${className}`}
    >
      <span className="text-4xl mb-2">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

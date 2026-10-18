import { motion } from 'framer-motion'

type Props = {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="rounded-xl border border-white/6 bg-white/[0.02] p-6 shadow-sm"
    >
      <div className="mb-4 h-12 w-12 rounded-md bg-accent/10 text-accent flex items-center justify-center font-semibold">
        {title.charAt(0)}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white/90">{title}</h3>
      <p className="text-sm text-white/50">{description}</p>
    </motion.article>
  )
}

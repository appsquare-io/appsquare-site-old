interface PageHeaderProps {
  children: any
  as?: string
}

const PageHeader = ({ children, as }: PageHeaderProps) => {
  const Tag = (as || 'h1') as keyof JSX.IntrinsicElements

  return (
    <Tag className="text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-5xl bg-clip-text bg-gradient-to-br from-red-400 to-pink-600">
      {children}
    </Tag>
  )
}

export default PageHeader

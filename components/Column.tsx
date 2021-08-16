import cn from 'classnames'

interface ColumnProps {
  children: any
  className?: string
  size?: 'large' | 'small'
}

export const Column = ({
  children,
  className,
  size = 'large',
}: ColumnProps) => (
  <div
    className={cn(
      'w-full px-4 mx-auto sm:px-6 lg:px-8',
      { 'max-w-6xl': size == 'large' },
      { 'max-w-3xl': size == 'small' },
      className && className
    )}
  >
    {children}
  </div>
)

export default Column

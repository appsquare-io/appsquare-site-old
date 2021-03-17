import { Divider } from 'components'

export const List = ({ children }) => (
  <div className="flex flex-col space-y-4">{children}</div>
)

const Heading = ({ children }) => (
  <div className="flex flex-col space-y-4">
    <h2 className="text-xl font-medium tracking-tight">{children}</h2>
    <Divider />
  </div>
)

const Item = ({ title, children }) => (
  <div className="flex flex-col space-y-2">
    <span className="font-semibold">{title}</span>
    <p>{children}</p>
  </div>
)

const Items = ({ children }) => (
  <div className="flex flex-col pt-4 space-y-6">{children}</div>
)

List.Heading = Heading
List.Item = Item
List.Items = Items

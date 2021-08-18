import { HeartIcon } from '@heroicons/react/solid'
import Column from 'components/Column'

const Footer = () => (
  <Column size="small">
    <footer className="w-full pt-8 my-14">
      <div className="flex flex-col items-center justify-between space-y-6 sm:flex-row sm:space-y-0">
        <span className="flex items-center text-sm font-semibold text-gray-800">
          Made with <HeartIcon className="w-auto h-4 px-1" />
          in Cape Town
        </span>

        <div className="flex justify-between space-x-4">
          <a href="https://github.com/appsquare-io" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://twitter.com/appsquare_io" target="_blank">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </footer>
  </Column>
)

export default Footer

const GitHubIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 cursor-pointer"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
)

const TwitterIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 cursor-pointer"
    {...props}
  >
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
)

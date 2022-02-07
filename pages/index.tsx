import Layout from '@/app/layout/';

export default function Dashboard() {
  return (
    <div>
      <button>Login</button>
      <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                        <div className="relative w-full">
                            <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={10} cy={10} r={7} />
                                    <line x1={21} y1={21} x2={15} y2={15} />
                                </svg>
                            </div>
                            <input className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2" type="text" placeholder="Search" />
                        </div>
                    </div>
      <div className="mb-10 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden border border-gray-200 bg-white p-3 hover:bg-green-100">
            <div className="m-2 text-justify text-sm">
              <p className="text-right text-xs">May 17, 2020</p>
              <h2 className="mb-8 h-2 text-lg font-bold">Blog Post Title </h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum. djnkf kdsnfkjnf
              </p>
            </div>
            <div className="mt-4 w-full text-right">
              <a
                className="text-sm font-bold uppercase text-green-400"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="overflow-hidden border border-gray-200 bg-white p-3 hover:bg-green-100">
            <div className="m-2 text-justify text-sm">
              <p className="text-right text-xs">May 17, 2020</p>
              <h2 className="mb-8 h-2 text-lg font-bold">Blog Post Title </h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="mt-4 w-full text-right">
              <a
                className="text-sm font-bold uppercase text-green-400"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="overflow-hidden border border-gray-200 bg-white p-3 hover:bg-green-100">
            <div className="m-2 text-justify text-sm">
              <p className="text-right text-xs">May 17, 2020</p>
              <h2 className="mb-8 h-2 text-lg font-bold">Blog Post Title </h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="mt-4 w-full text-right">
              <a
                className="text-sm font-bold uppercase text-green-400"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="overflow-hidden border border-gray-200 bg-white p-3 hover:bg-green-100">
            <div className="m-2 text-justify text-sm">
              <p className="text-right text-xs">May 17, 2020</p>
              <h2 className="mb-8 h-2 text-lg font-bold">Blog Post Title </h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="mt-4 w-full text-right">
              <a
                className="text-sm font-bold uppercase text-green-400"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="overflow-hidden border border-gray-200 bg-white p-3 hover:bg-green-100">
            <div className="m-2 text-justify text-sm">
              <p className="text-right text-xs">May 17, 2020</p>
              <h2 className="mb-8 h-2 text-lg font-bold">Blog Post Title </h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="mt-4 w-full text-right">
              <a
                className="text-sm font-bold uppercase text-green-400"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="overflow-hidden border border-gray-200 bg-white p-3 hover:bg-green-100">
            <div className="m-2 text-justify text-sm">
              <p className="text-right text-xs">May 17, 2020</p>
              <h2 className="mb-8 h-2 text-lg font-bold">Blog Post Title </h2>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="mt-4 w-full text-right">
              <a
                className="text-sm font-bold uppercase text-green-400"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

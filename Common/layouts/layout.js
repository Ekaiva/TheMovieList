import Header from "../Header"
import  Navigation from "../Common/components/Navigation"

export default function RootLayout({ children})  {
  return (
    <>
          <div className="className='text-app-pure-white lg:flex'">
            {/* <Header/> */}
            <Navigation />
            <main className='mx-0 flex flex-col py-6 px-4 md:m-6 md:px-0 md:pt-0 lg:ml-32 lg:min-w-[800px] lg:grow'>
          {children}
      
      </main>
          </div>
    </>
  );
}
import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'
// in Browser
function signIn({ providers }) {
  console.log('providers', providers)
  return (
    <>
      {/* <Header /> */}
      {/* <div className="flex flex-col items-center justify-center min-h-hscreen py-2 -mt-56 px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p className="font-xs italic"> this is not a REAL app, it is built for educational purposes only</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => SignIntoProvider(provider.id,{ callbackUrl: "/"})}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div> */}
    </>
  )
}

// server
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default signIn

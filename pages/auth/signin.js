import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'

// in Browser
function signIn({ providers }) {
  console.log('providers', providers)
  return (
    <>
      {/* {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))} */}
      HOGE
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

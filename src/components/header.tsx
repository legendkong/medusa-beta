export function Header() {
  return (
    <div className='text-center mt-40'>
      <h1 className='inline-block bg-gradient-to-r from-blue-600 via-green-300 to-indigo-400 bg-clip-text text-7xl text-transparent font-extrabold '>
        Medusa
      </h1>
      <div id='betatag'>beta</div>
      <p className='break-normal mt-5 '>
        An Observability playground for developers to understand the processes
        <br />
        behind instrumenting, generating, collecting, and exporting telemetry
        data.
      </p>
    </div>
  )
}

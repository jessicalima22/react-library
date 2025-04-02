
import './App.css'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'

function App() {
  return (
    <>
      <div>
        <Badge color="gray" variant="pill">This</Badge>
        <Badge color="red">is</Badge>
        <Badge color="yellow">a</Badge>
        <Badge color="green" variant="pill">test</Badge>
        <Badge color="blue">of</Badge>
        <Badge color="indigo">my</Badge>
        <Badge color="purple" variant="pill">charming</Badge>
        <Badge color="pink" variant="square">react</Badge>
        <Badge color="red">badge</Badge>
        <Badge color="blue" variant="pill">library</Badge>
        <Badge color="indigo">!</Badge>
      </div>
      <div>
        <Banner status="success" >
          <span>You don't need to write anything, but...</span>
        </Banner>
        <Banner status="warning"/>
        <Banner status="error">
          <span> ...If you don't write a title,</span>
          <span>you'll see that...</span>
        </Banner>
        <Banner status="success" />
        <Banner status="neutral">
          <span>... we'll set the default one for you!</span>
          <span>Then you don't even need to worry ^^ </span>
        </Banner>
        <Banner status="neutrallS">i2hfiuhfquihoiyyyyyyyyy</Banner>
        
      </div>
    </>
  )
}

export default App

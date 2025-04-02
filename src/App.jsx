
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
        <Banner status="success" title="You don't need to write anything, but..."/>
        <Banner status="warning"/>
        <Banner status="error" title="...If you don't write a title," text="you'll see that..."/>
        <Banner status="success"/>
        <Banner 
          status="neutral" 
          title="... we'll set the default one for you!" 
          text="Then you don't even need to worry ^^ ">
        </Banner>
        <Banner status="success" title="max width test" text="working!" maxWidth="150px"/>
      </div>
    </>
  )
}

export default App

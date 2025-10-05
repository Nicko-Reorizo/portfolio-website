import Header from './Header.jsx'
import Hero from './Hero.jsx'
import TechStack from './TechStack.jsx'
function App() {
  return (
   <>
   <Header/>
   <Hero Logged = {true}/>
   <TechStack/>
   </>
  );
}
export default App

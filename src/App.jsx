import useJOSAnimation from './hooks/useJOSAnimation';
import Layout from './components/layout/Layout';


function App() {
  // Init JOS Animation
  useJOSAnimation();
  return (
        <Layout />
  );
}

export default App;

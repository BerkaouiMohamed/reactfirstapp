import './App.css';
import Product from './components/product';
import products  from './products'

function App() {
  return (
<>
<input type="text" />

<br/>
<div>
{products.map((p)=><Product product={p} key={p.id} />)}
</div>
</>
  );
}

export default App;

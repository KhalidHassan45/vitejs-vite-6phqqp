import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import CarRentals from './pages/CarRentals';
import Store from './pages/Store';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/car-rentals" element={<CarRentals />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
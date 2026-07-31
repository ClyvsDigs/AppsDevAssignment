import Header from "../components/Header";
import { Link } from "react-router";
import R1 from "../assets/r1.jpg";
import R7 from "../assets/r7.jpg";
import R3 from "../assets/r3.jpg";
import R15 from "../assets/r15.jpg";
import H2R from "../assets/h2r.jpg";
import Harley750 from "../assets/harley_750.jpg";
import Hayabusa from "../assets/hayabusa.jpg";
import Nmax from "../assets/nmax.jpg";
import Raider from "../assets/raider.jpg";
import RusiFlame from "../assets/rusi_flame.jpg";
import RusiFlash from "../assets/rusi_flash.jpg";
import Sniper from "../assets/sniper.jpg";
import WinnerX from "../assets/winnerx.jpg";
import Z1000 from "../assets/z1000.jpg";


export default function HomePage() {
 const motorcycle = [
  {
    id: 1,
    name: "Yamaha R1",
    price: "₱1,200,000",
    image: R1,
  },
  {
    id: 2,
    name: "Yamaha R7",
    price: "₱520,000",
    image: R7,
  },
  {
    id: 3,
    name: "Yamaha R3",
    price: "₱280,000",
    image: R3,
  },
  {
    id: 4,
    name: "Yamaha R15",
    price: "₱180,000",
    image: R15,
  },
  {
    id: 5,
    name: "Kawasaki H2R",
    price: "₱3,200,000",
    image: H2R,
  },
  {
    id: 6,
    name: "Suzuki Hayabusa",
    price: "₱1,400,000",
    image: Hayabusa,
  },
  {
    id: 7,
    name: "Yamaha NMAX",
    price: "₱150,000",
    image: Nmax,
  },
  {
    id: 8,
    name: "Suzuki Raider 150",
    price: "₱110,000",
    image: Raider,
  },
  {
    id: 9,
    name: "Rusi Flame 125",
    price: "₱65,000",
    image: RusiFlame,
  },
  {
    id: 10,
    name: "Rusi Flash 150",
    price: "₱75,000",
    image: RusiFlash,
  },
  {
    id: 11,
    name: "Yamaha Sniper 155",
    price: "₱125,000",
    image: Sniper,
  },
  {
    id: 12,
    name: "Honda Winner X",
    price: "₱125,000",
    image: WinnerX,
  },
  {
    id: 13,
    name: "Kawasaki Z1000",
    price: "₱900,000",
    image: Z1000,
  },
  {
    id: 14,
    name: "Harley-Davidson Street 750",
    price: "₱420,000",
    image: Harley750,
  },
];
  return (
    <>
      <Header />

      <div className="container">
        {motorcycle.map((bike) => (
          <div className="card" key={bike.id}>
            <img src={bike.image} alt={bike.name} />

            <h2>{bike.name}</h2>

            <p>{bike.price}</p>

            <Link to={`/motorcycle/${bike.id}`}>
             <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    View Details
                 </button>
              </Link>
          </div>
        ))}
      </div>
    </>
  );
}
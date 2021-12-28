import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router'
// import HomeIcon from '@mui/icons-material/Home';
import { HiHome } from "react-icons/hi"
import { BsArrowDownUp, BsCart, BsCart3 } from "react-icons/bs"
const Home = () => {
    const nagative = useNavigate();
    const [num, setNum] = useState(0);
    const [value, setValue] = useState([
        {
            heading: "SOME NEW AWESOME LOOKING SHOES'S",
            para: " Best offer in shoes at SATA - Up to 40% off Top Brands",
            img: "https://rukminim1.flixcart.com/image/714/857/k1s6ljk0/shoe/d/8/b/8599085-6-bata-blue-original-imafh9t2kxyvfzwy.jpeg?q=50",
        },
        {
            heading: "SOME NEW ATTRACTIVE SANDALS'S",
            para: " Best offer in shoes at SATA - Up to 50% off Top Brands",
            img: "https://5.imimg.com/data5/KK/PE/MY-13349829/men-27s-casual-sandals-500x500.jpg",
        },
        {
            heading: "SOME NEW LOOKING SLEEPER'S",
            para: "Best offer in shoes at SATA - Up to 30% off Top Brands",
            img: "https://canary.contestimg.wish.com/api/webimage/5ac7150554557816fa7abe81-large.jpg?cache_buster=38c0fdf242be2e3f9cc10125d2e08856",
        },
        {
            heading: "SOME NEW SHOKES'S",
            para: "Best offer in shoes at SATA - Up to 70% off Top Brands",
            img: "https://5.imimg.com/data5/FQ/VI/LO/SELLER-10397546/men-low-cut-ankle-socks-500x500.jpg",
        },
        {
            heading: "SOME NEW  LOOKING BELT'S",
            para: "Best offer in shoes at SATA - Up to 10% off Top Brands",
            img: "https://cdn.shopify.com/s/files/1/1915/8837/products/product-image-875933503.jpg?v=1559727117",
        }

    ]);
    const incChart = () => {
        setNum(num + 1);
    }
    const decChart = () => {
        if (num > 0) {
            setNum(num - 1);
        }
        else {
            alert("Sorry First You Add Any Product In Chart");
            setNum(0);
        }
    }

    const product = () => {

    }
    return (
        <>
            <div className="Header">
                <img src="https://www.logo.wine/a/logo/SATA_Air_A%C3%A7ores/SATA_Air_A%C3%A7ores-Logo.wine.svg" alt="error" />
                <h1>SATA PVT LTD INDIA'S NO.1</h1>
                <button><HiHome /></button>
            </div>
            <div className="SubHeader">
                <Button onClick={() => { nagative("/sleeper") }}>Sleeper's</Button>
                <Button>Sandal's</Button>
                <Button>Shoes's</Button>
                <Button>Boot Shoes's</Button>
                <Button>Sport Shoes's</Button>
            </div>
            <button style={{ position: "sticky", top: "50%", left: "10px", border: "none", padding: "10px 10px", background: "linear-gradient(green,transparent)" }} onClick={() => { nagative("/Add_chart") }}><BsCart />ADD Chart  {num}</button>
            <div className="drop">
                <Button> <BsArrowDownUp /> </Button>
            </div>
            <div className="HeadingImage">
                {
                    value.map((data) => {
                        return (<>
                            <h1>{data.heading}</h1>
                            <p>{data.para}</p>
                            <img src={data.img} />
                            <button>DETAIL</button>
                            <button onClick={incChart}><BsCart3 />ADD CHART</button>
                            <button onClick={decChart}><BsCart />REMOVE FROM CHART</button>
                        </>)
                    })
                }
            </div >
            {/* <div className="HeadingImage">
                <h1>SOME NEW AWESOME LOOKING SHOES'S</h1>
                <p> Best offer in shoes at SATA - Up to 40% off Top Brands</p>
                <img src="https://rukminim1.flixcart.com/image/714/857/k1s6ljk0/shoe/d/8/b/8599085-6-bata-blue-original-imafh9t2kxyvfzwy.jpeg?q=50" />
                <button>DETAIL</button>
                <button onClick={incChart}><BsCart3 />ADD CHART</button>
                <button onClick={decChart}><BsCart />REMOVE FROM CHART</button>
                <h1>SOME NEW ATTRACTIVE SANDALS'S</h1>
                <p> Best offer in shoes at SATA - Up to 50% off Top Brands</p>
                <img src="https://5.imimg.com/data5/KK/PE/MY-13349829/men-27s-casual-sandals-500x500.jpg" />
                <button>DETAIL</button>
                <button onClick={incChart}><BsCart3 />ADD CHART</button>
                <button onClick={decChart}><BsCart />REMOVE FROM CHART</button>
                <h1>SOME NEW LOOKING SLEEPER'S</h1>
                <p> Best offer in shoes at SATA - Up to 30% off Top Brands</p>
                <img src="https://canary.contestimg.wish.com/api/webimage/5ac7150554557816fa7abe81-large.jpg?cache_buster=38c0fdf242be2e3f9cc10125d2e08856" />
                <button>DETAIL</button>
                <button onClick={incChart}><BsCart3 />ADD CHART</button>
                <button onClick={decChart}><BsCart />REMOVE FROM CHART</button>
                <h1>SOME NEW SHOKES'S</h1>
                <p> Best offer in shoes at SATA - Up to 70% off Top Brands</p>
                <img src="https://5.imimg.com/data5/FQ/VI/LO/SELLER-10397546/men-low-cut-ankle-socks-500x500.jpg" />
                <button>DETAIL</button>
                <button onClick={incChart}><BsCart3 />ADD CHART</button>
                <button onClick={decChart}><BsCart />REMOVE FROM CHART</button>
                <h1>SOME NEW  LOOKING BELT'S</h1>
                <p> Best offer in shoes at SATA - Up to 10% off Top Brands</p>
                <img src="https://cdn.shopify.com/s/files/1/1915/8837/products/product-image-875933503.jpg?v=1559727117" />
                <button>DETAIL</button>
                <button onClick={incChart}><BsCart3 />ADD CHART</button>
                <button onClick={decChart}><BsCart />REMOVE FROM CHART</button>
            </div> */}

            <div className="Instruction">
                <div className="part"> Get to Know Us<br />
                    About Us<br />
                    Careers<br />
                    Press Releases<br />
                    SATA Cares<br />
                    Gift a Smile<br />
                </div>
                <div className="second_part">
                    Let Us Help You<br />
                    COVID-19 and Amazon<br />
                    Your Account<br />
                    Returns Centre<br />
                    100% Purchase Protection<br />
                    Help<br />
                </div>
                <div className="Language">
                    <select >
                        <option>Language</option>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Marathi</option>
                        <option>Gujarati</option>
                        <option>Telugue</option>
                        <option>Malyanam</option>
                        <option>Punjabi</option>
                        <option>Nepali</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Home


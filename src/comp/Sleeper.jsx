import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { BsCart3 } from "react-icons/bs"
import './Sleeper.css'
import { useNavigate } from 'react-router'
const Sleeper = () => {
    const nagative = useNavigate();
    const [num, setNum] = useState(0);
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


    return (
        <>
            <h1 className="Heading">SLEEPER'S ON SATA.</h1>
            <button style={{ position: "sticky", top: "50%", left: "10px", border: "none", padding: "10px 10px", background: "linear-gradient(green,transparent)" }} onClick={() => { nagative("/Add_chart") }}><BsCart3 />ADD Chart  {num}</button>
            <div className="Headingimg">
                <h1>Men's and Boys Silicon Rubber Lightweight Slippers , Spectacles.</h1>
                <h4>You Save: 	₹11.00 (6%)Inclusive of all taxes</h4>
                <img src="https://m.media-amazon.com/images/I/91XKhyul1qL._UY695_.jpg" />
                <img src="https://m.media-amazon.com/images/I/81B0gnSxbaL._UL1500_.jpg" />
                <img src="https://m.media-amazon.com/images/I/71YnbhU1dHL._UL1500_.jpg" />
                <select>
                    <option>SIZE</option>
                    <option>5-UK</option>
                    <option>6-UK</option>
                    <option>7-UK</option>
                    <option>8-UK</option>
                    <option>-UK</option>
                    <option>10-UK</option>
                </select>
                <li>Sole: Ethylene Vinyl Acetate</li>
                <li> Closure: Slip-On</li>
                <li> Shoe Width: Medium</li>
                <li>High quality ,comfortable and stylish product. Give your soft and delicate feet a comfortable feeling by picking this product.</li>
                <li> Made from superior quality material it gives you a nice feeling while walking and allows you to wear it all day long.</li>
                <li> EVA Sole is slip resistance and durable</li>
                <li>This EVA slipper Provides you a strong grip which doesn't lead to slipping of your feet.</li>
                <li>The Slipper made by high quality EVA which is comfortable and slight, Anti-skid sole 100% Environmental.
                </li>
                <p>Price: 	₹131.00 - ₹209.00<br />
                    Inclusive of all taxes</p>
                <Button className="HeadingButton">PURCHASE</Button>
                <Button className="HeadingButton" onClick={incChart}><BsCart3></BsCart3>ADD CHART</Button>
                <button className="HeadingButton" onClick={decChart}>Remove From Cart</button>
                <h1>latest collectoin Slippers flip-flops casual branded home slippers </h1>
                <h4>You Save: 	₹15.00 (7%)Inclusive of all taxes</h4>
                <img src="https://m.media-amazon.com/images/I/91KYyRRJG8L._UL1500_.jpg" />
                <img src="https://m.media-amazon.com/images/I/91rs7QxdX9L._UL1500_.jpg" />
                <img src="https://m.media-amazon.com/images/I/81iwHT96zwL._UL1500_.jpg" />
                <select>
                    <option>SIZE</option>
                    <option>5-UK</option>
                    <option>6-UK</option>
                    <option>7-UK</option>
                    <option>8-UK</option>
                    <option>-UK</option>
                    <option>10-UK</option>
                </select>
                <li>Sole: Ethylene Vinyl Acetate</li>
                <li> Closure: Slip-On</li>
                <li> Shoe Width: Medium</li>
                <li>High quality ,comfortable and stylish product. Give your soft and delicate feet a comfortable feeling by picking this product.</li>
                <li> Made from superior quality material it gives you a nice feeling while walking and allows you to wear it all day long.</li>
                <li> EVA Sole is slip resistance and durable</li>
                <li>This EVA slipper Provides you a strong grip which doesn't lead to slipping of your feet.</li>
                <li>The Slipper made by high quality EVA which is comfortable and slight, Anti-skid sole 100% Environmental.
                </li>
                <p>Price: 	₹131.00 - ₹209.00<br />
                    Inclusive of all taxes</p>
                <Button className="HeadingButton">PURCHASE</Button>
                <Button className="HeadingButton" onClick={incChart}><BsCart3></BsCart3>ADD CHART</Button>
                <button className="HeadingButton" onClick={decChart}>Remove From Cart</button>
                <h1>mens Trending Slipper </h1>
                <h4>You Save: 	₹10.00 (5%)Inclusive of all taxes</h4>
                <img src="https://m.media-amazon.com/images/I/611EPJlCJlS._UL1500_.jpg" />
                <img src="https://m.media-amazon.com/images/I/71zcolpeLbS._UL1500_.jpg" />
                <img src="https://m.media-amazon.com/images/I/51k1RXZRlPS.jpg" />
                <select>
                    <option>SIZE</option>
                    <option>5-UK</option>
                    <option>6-UK</option>
                    <option>7-UK</option>
                    <option>8-UK</option>
                    <option>-UK</option>
                    <option>10-UK</option>
                </select>
                <li>Sole: Ethylene Vinyl Acetate</li>
                <li> Closure: Slip-On</li>
                <li> Shoe Width: Medium</li>
                <li>High quality ,comfortable and stylish product. Give your soft and delicate feet a comfortable feeling by picking this product.</li>
                <li> Made from superior quality material it gives you a nice feeling while walking and allows you to wear it all day long.</li>
                <li> EVA Sole is slip resistance and durable</li>
                <li>This EVA slipper Provides you a strong grip which doesn't lead to slipping of your feet.</li>
                <li>The Slipper made by high quality EVA which is comfortable and slight, Anti-skid sole 100% Environmental.
                </li>
                <p>Price: 	₹131.00 - ₹209.00<br />
                    Inclusive of all taxes</p>
                <Button className="HeadingButton">PURCHASE</Button>
                <Button className="HeadingButton" onClick={incChart}><BsCart3></BsCart3>ADD CHART</Button>
                <button className="HeadingButton" onClick={decChart}>Remove From Cart</button>
                <h1>Slipper for Men's and Women's Flip Flops Home Fashion Slides</h1>
                <h4>You Save: 	₹22.00 (9%)Inclusive of all taxes</h4>
                <img src="https://m.media-amazon.com/images/I/811v4XcNlPL._UL1500_.jpg" />
                <img src="https://m.media-amazon.com/images/I/81CUZetc4BL._UL1500_.jpg" />
                <img src="https://m.media-amazon.com/images/I/81VygqEda9L._UL1500_.jpg" />
                <select>
                    <option>SIZE</option>
                    <option>5-UK</option>
                    <option>6-UK</option>
                    <option>7-UK</option>
                    <option>8-UK</option>
                    <option>-UK</option>
                    <option>10-UK</option>
                </select>
                <li>Sole: Ethylene Vinyl Acetate</li>
                <li> Closure: Slip-On</li>
                <li> Shoe Width: Medium</li>
                <li>High quality ,comfortable and stylish product. Give your soft and delicate feet a comfortable feeling by picking this product.</li>
                <li> Made from superior quality material it gives you a nice feeling while walking and allows you to wear it all day long.</li>
                <li> EVA Sole is slip resistance and durable</li>
                <li>This EVA slipper Provides you a strong grip which doesn't lead to slipping of your feet.</li>
                <li>The Slipper made by high quality EVA which is comfortable and slight, Anti-skid sole 100% Environmental.
                </li>
                <p>Price: 	₹131.00 - ₹209.00<br />
                    Inclusive of all taxes</p>
                <Button className="HeadingButton">PURCHASE</Button>
                <Button className="HeadingButton" onClick={incChart}><BsCart3></BsCart3>ADD CHART</Button>
                <button className="HeadingButton" onClick={decChart}>Remove From Cart</button>
                <button className="HeadingButton" onClick={() => { nagative("/home") }}>Back To Home</button>
            </div>
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

export default Sleeper;

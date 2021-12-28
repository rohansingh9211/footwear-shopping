import React from 'react'
import { useNavigate } from 'react-router'

const Add_Chart = () => {
    const nagative = useNavigate();
    return (
        <>
            <button onClick={() => { nagative("/home") }}>Back To Home</button>
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

export default Add_Chart

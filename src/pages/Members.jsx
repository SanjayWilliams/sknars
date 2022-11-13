import "./Members.css"

function Members() {
    return (
        <div className="members-container">
            <h1 className="members-title">Members</h1>

            <h2 className="subtitle first">Members of the Executive</h2>
            <div className="section-container first">
                <img className="members-image" src="./executive.jpg"/>
                <div className="members-text">
                    <p className="italics">Back Row, Left to Right:</p>
                    <p>Kennedy DeSilver <span className="callsign">V44KEN</span> - Assistant Secretary <br/>
                    Roosevelt Howe <span className="callsign">V44KHR</span> - Vice President
                    </p>
                    <p className="italics extra-space">Front Row, Left to Right</p>
                    <p>
                    Wilma Hutchinson <span className="callsign">V44MOD</span> - Treasurer <br/>
                    Patricia Isaac-Williams <span className="callsign">V44PAT</span> - President<br/>
                    Jessica Warner <span className="callsign">V44LW</span> - Secretary
                    </p>
                </div>
                
            </div>

            <h2 className="subtitle reveal">Emergency Communications</h2>
            <div className="section-container reveal">
                <div className="members-text alternate">
                    <p>
                        <span className="bold-italics">Frequencies:</span><br/>
                        146.820Mhz - 600Khz General<br/>
                        146.610 - 600Khz Tone 23<br/>
                        466.825 - 5Mhz
                    </p>
                    <p>
                        <span className="bold-italics">Committee:</span><br/>
                        Basil Woods <span className="callsign">V44KBW</span> - Chair<br/>
                        Hugh Mallalieu <span className="callsign">V44KM</span>
                    </p>
                </div>
                <img className="members-image" src="./emergency.jpg"/>
                
            </div>

            <h2 className="subtitle reveal">Training Committee</h2>
            <div className="section-container reveal">
            <img className="members-image" src="training.jpg"/>
                <div className="members-text">
                    <p>
                        Trevor Seaton <span className="callsign">V44KBT</span> - Team Leader<br/>
                        Lawson Adams <span className="callsign">V44KO</span><br/>
                        Erick France <span className="callsign">V44KK</span>
                    </p>
                    <p>
                        Amateur Radio Licensing<br/>
                        Morse Code Optional<br/>
                        Operating an Amateur Radio Station
                    </p>
                </div>
                
            </div>

        </div>
    )
}

export default Members
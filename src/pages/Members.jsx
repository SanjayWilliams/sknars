import "./Members.css"

function Members() {
    return (
        <div className="members-container">
            <h1 className="members-title">Members</h1>

            <h2 className="subtitle">Members of the Executive</h2>
            <div className="section-container">
                <img />
                <div>
                    <p className="italics">Back Row, Left to Right:</p>
                    <p>Kennedy DeSilver <span className="callsign">V44KEN</span> - Assistance Secretary <br/>
                    Roosevelt Howe <span className="callsign">V44KHR</span> - Vice President
                    </p>
                    <p className="italics extra-space">Front Row, Left to Right</p>
                    <p>
                    Wilma Hutchinson <span className="callsign">V44MOD</span> - Treasurer <br/>
                    Patricia Isaac-Williams <span className="callsign">V44PAT</span> - President<br/>
                    Jessica Warner <span className="callsign">V44KN</span> - Secretary
                    </p>
                </div>
                
            </div>

            <h2 className="subtitle">Emergency Communications</h2>
            <div className="section-container">
                <img/>
                <div>
                    <p>
                        <span className="bold-italics">Frequencies:</span><br/>
                        146.820Mhz - 600Khz General<br/>
                        146.610 - 600Khz Tone 23<br/>
                        466.825 - 5Mhz
                    </p>
                    <p>
                        <span className="bold-italics">Committee:</span><br/>
                        Basil Woods <span className="callsign">VV44KEN</span> - Chair<br/>
                        Hugh Mallalieu <span className="callsign">V44KM</span>
                    </p>
                </div>
                
            </div>

            <h2 className="subtitle">Training Committee</h2>
            <div className="section-container">
                <div>
                    <p>
                        Trevor Seaton <span className="callsign">V44KBT</span> - Team Leader<br/>
                        Lawson Adams <span className="callsign">V44KO</span><br/>
                        Eric France <span className="callsign">V44KK</span> - Captian
                    </p>
                    <p>
                        Amateur Radio Licensing<br/>
                        Morse Code Optional<br/>
                        Operating an Amateur Radio Station
                    </p>
                </div>

                <img/>
            </div>

        </div>
    )
}

export default Members
const ReportForm = () => {
    return ( 
        <div className="my-form">
            <h2>Report Form</h2>
            <form className="form" >
                <div>
                    <label className="form-label">Name of School </label>
                <input type="text" className="input-box"></input>
                </div>
                <div>
                    <label className="form-label">Day & Date Visited</label>
                <input type="date" className="input-box" ></input>
                </div>
                <div>
                    <label className="form-label">Person spoken to</label>
                <input type="text" className="input-box" ></input>
                </div>
                <div>
                    <label className="form-label">Person's Contact</label>
                <input type="text" className="input-box" ></input>
                </div>
                <div>
                    <label className="form-label">Person's Position</label>
                <input type="text" className="input-box" ></input>
                </div>
                <div>
                    <label className="form-label">School's Location</label>
                <input type="text" className="input-box" ></input>
                </div>
                <div>
                    <label className="form-label"> School's Feedback</label>
                <input type="text" className="input-box" ></input>
                </div>
                <div>
                    <label className="form-label">Markerter's Name</label>
                <input type="text" className="input-box" ></input>
                </div>

                <button type="submit" className="btn">Submit</button>
                
    
            </form>
        </div>
     );
}
 
export default ReportForm;
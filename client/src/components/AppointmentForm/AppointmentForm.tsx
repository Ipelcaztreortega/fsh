export const AppointmentForm = () => {
    return(
        <div>
            <h1>Appointment Form</h1>

            <form action="">
                <div>
                    <label htmlFor="patient">Patient</label>
                    <input type="text" id="patient" />
                </div>

                <div>
                    <label htmlFor="doctor">Doctor</label>
                    <input type="text" id="doctor" />
                </div>

                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" />
                </div>

                <div>
                    <label htmlFor="time">Time</label>
                    <input type="time" id="time" />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


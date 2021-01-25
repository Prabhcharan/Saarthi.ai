import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function Calendar() {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div className='date'>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                maxDate={new Date()}
                isClearable
                showYearDropdown
                scrollableYearDropdown
            />
        </div>
    )
}

export default Calendar
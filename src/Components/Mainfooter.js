import React from "react";
import "./style/mainfooter.css";

export default function Mainfooter() {
  return (
    <div className="mainfooter">
      <div className="logo">
        <img
          alt="icon"
          src="https://starclinch.com/static/images/home/StarClinch-Logo-new.svg"
        />
      </div>
      <div className="socialmedia-icons">
        <img
          alt="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAY1BMVEUAAAD////29vb7+/tcXFw7OztHR0dsbGzR0dEoKCjr6+uWlpYwMDDm5ubAwMBZWVl1dXXe3t6tra2QkJAVFRVCQkKfn5+3t7fX19cMDAzGxsZRUVFMTEyIiIgjIyMeHh6AgIB8RUZ6AAAEpElEQVR4nO2b26KqIBCG8ZCWpXlILauV7/+Ue7dby1IG+Ado7Zv+a2U+hRkGGETwnyU+AB+AD8AH4ANg/2qYV+uhKIZ1lYe/DFD1XdqKmVZp11e/ARBVdXwTCt3i+vhWgKhqkoPK+kOnpKmiNwGE9V5v/Ef7mjEmYID8ill/6Jp7BqhSjvm7UnA0QABZeeLa/zsayswTQNQZBp5Khw4YjmaAY2s2pdJq7QwQNfbm72pMP8EAUJ3d7AtxNsRHPUBh2fuvOhT2AJ27+bs6W4DSj30hSiuAMPZlX4hYHZvVAIk/+0IkfACv9jUECoDI2f2WuigCggKAPfeYlXIAWFMvqisOULAaXqXlt9I01bkOGZEogAo3nnSLzOOoe5qKygRACE9/q156ea17viXCAQEwovZTIuPQAogRARhQ+2SA1QOIwQwQodnXhbJvAjhJ0UACQD3wROe9BgDZF5cAsAc0pH0jgOQJSwA0BN4Uib8RYBkQBfN9VTt4A4s8dQEAz0FyBEABzjoA2AWFaumljYQPzV1xDgAnQZtFTMu67UOj+d1YDYBPAskcAPjuF1VKAHwRsp8HFF760CgB8DbiGQA+fT2kAmCkAQuAFQ+gUAAw1gFuACUNkDHWYW4Ah4wEwIOAK8BrKHgBGH8PYCQBLowW9m4AFwqggobAKbmrLecAcZv8CMpnDhUBgDnhLg//KZgp/FF0VG6jzlQQAFgY3Bm2vsCgvCUAsInIBAC60nNCegJ8eQHoMYAvGSDEwpAJANzVOUyDaAIAO88EMGLNiGkjdwIAO88EgKY0UyycAMDOMwGgIWnKKSeA2g8Auq6q3wQAL+xkgK0XgBy0/4xEEwCYD+7yILpr8eHfwhc2jS2A2Nz1lc4no8vX5iEsmpEAYBd8y3E6prqAtzHtmJC8bGBzvcAXgLUbvg+AtzfoDFBIALAD+QFYSwA562jQFeC5wzQBRKzjIVeAWyABBKwFpitASwCwTohcAUoCgOWHrgA1AcByA1eANQGQcVpxBFhlBEAA1kf4ANgHFABnOnIE6EgAOJtxB8hJAM5RnRvAOSIBODmJG8A2oAEYfeAGkCkAGH7gBLAPVADg6sgVoFcCBNj2hiPALVADwKHABaDTAGSb9wNsMg0A7IkOANu5xQUA+gvsARY/QDo1A7MCe4B6YVA6uMTasgZYLe1JAFheYg0gFZfJh9dQbmgLIB94ywAhMg4tAZaHbSQA1AmWAER1H1XCAQSD+dkfuqagisrIIhbzZt8mnQmbQ2LKFgkQWpSQmnUiC8roOiLeShUUfdysqKTiLdYhKcpLVcVsvP0KQKq6SmU1HZ4dQVLVG2jqCb3+A6V9XUnn4G8kyuVDCEBQ7fyY3+kqe7VVtaGXsspEW+xvKGz2UFhIlxGiAMEAZ+q0bpruhwCCzKm6NzaW+APl/T2aq0vaqL2PAxCEvK38SVvkqgl2xSMb+eZH6IIFfMklH+HDkLtuI3rrCb/mk3dwXNps4Us2vItOA5QxlybPswf4q+Kqzf/aUX+dwR3gfsmuL/dEb+zOZW9x7c7yul92HPqmjM+Xtr2c47KphyM26H0B+NMH4APwBydwPoHGBdB6AAAAAElFTkSuQmCC"
        />
        <img
          alt="icon"
          src="data:image/png;base64,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"
        />
        <img
          alt="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAZlBMVEX///8AAAAODg7s7Ox9fX37+/vv7+/o6Ojl5eX19fVxcXEoKCioqKhlZWXJycm+vr7W1tZSUlJZWVkbGxvd3d2dnZ2KiopfX19MTExEREQ+Pj45OTkzMzMuLi4jIyMWFha0tLSVlZX+TSvBAAACLElEQVRoge2aa5eCIBBAAV/5Ss1Ss6f//08ubftoR91Agtk9Z+63Ss6VwGFgZIwgCIIgCIIgnBBI4jgOPc+LVt9E8nMov7/9/ApLHEbbcl1ku8ZPkrzdVFXVdfv+cDyl5/oiBL8hxKU+p6fjod93nbxi0+ZJ4je7rFiX2yiMde4kCMvMz6s+5aakfZX7WRmq2FfD3tgH2Q+rZ331Xy694//a5+3FkpbzupzXrq1Zb6xneyusesV2xttb1XLeT2sHy1rOd1PawO6/fENMTerCupbzYsJr68l9xJ/wmofF56RjbexAy3k88tqNGZ+MY0fmxJuNvI0TbzPyJk68ychrO0jeGYdKJ1rOoTZw5IWRMlJtWJdGMyEC3lK1oQhZaTAXYNahvCoIT159Xbx2wZXhquVlwbDQewVe5XB198oJsWyYYcDa6XplRO8WeGHKMeh7WZDpr50D8CqH5wcvY552VIcBWjnb+OGVue9GzwszjqVe+QSecLwac3LCq/xUTHhZrJ4TwoUwN/FqDHMOGrZmXuVhbkEz5Wk555Whs1ZovgGtKmOv7LKCuPoj/cUaX6z5jPX8YsWr/xafTdcjrPV3WOB9Rb6BlV9h5ZNY+TPWfgFrf4S1H8Ta/2Lt99HON7DOc7DOr7DO67DOJ7HOY7HOn9HO27HqC1j1FK10dBkwyfkAqV6GVh/Eqoei1X/R6t0Mq77/3meU9xm+7M7f35i9EyfvqxAEQRAEQRCEAm++NDOSHEErlgAAAABJRU5ErkJggg=="
        />
        <img
          alt="icon"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="footertopics">
        <div className="topic-item">
          <h4>FOR BUYERS</h4>
          <p>Our Buyers</p>
          <p>Browser</p>
          <p>Post Your Requirement</p>
          <p>Enterainment on EMI</p>
        </div>
        <div className="topic-item">
          <h4>FOR ARTIST</h4>
          <p>Login</p>
          <p>Artist SignUp</p>
          <p>Artist Subscriptions</p>
        </div>
      </div>
      <div className="footertopics">
        <div className="topic-item">
          <h4>ABOUT US</h4>
          <p>Our Story</p>
          <p>Careers</p>
        </div>
        <div className="topic-item">
          <h4>POLICY</h4>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Disclaimer</p>
          <p>FAQS</p>
        </div>
      </div>
      <div className="address">
        <h4>REGISTERED OFFICE ADDRESS:</h4>
        <p>
          VINSM Globe Private Linited Percept House, Ground Floor East of
          Kailash, New Delhi <br />
          CIN: U52605DL2012PTC236944
          <br />
          Phone: +91 11 498 498 01
          <br />
          Contact Us
        </p>
      </div>
      <div className="copyright">
        <p>@Copyright 2015-2023</p>
      </div>
    </div>
  );
}

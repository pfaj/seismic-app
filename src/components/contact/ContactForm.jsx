import React from "react";
const key = import.meta.env.VITE_CONTACT_KEY;
export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contactContainer">
      <div className="contactForm">
        <form id="userForm" role="input" method="post" onSubmit={onSubmit}>
          <legend className="formLegend">
            <h2>CONTACT INFORMATION</h2>
            <hr className="heroLine" />
          </legend>
          <div className="formItems">
            <div className="formItem">
              <label for="firstname">First Name *</label>
              <input
                id="firstname"
                placeholder="First Name"
                type="text"
                name="first"
                required
              />
            </div>

            <div className="formItem">
              <label for="lastname">Last Name *</label>

              <input
                id="lastname"
                placeholder="Last Name"
                type="text"
                name="last"
                required
              />
            </div>

            <div className="formItem">
              <label for="email">Email *</label>
              <input
                id="email"
                placeholder="Email"
                type="email"
                name="email"
                required
              />
            </div>

            <div className="formItem">
              <label for="phone">Phone</label>
              <input
                id="phone"
                placeholder="Phone Number"
                type="text"
                name="cellphone"
              />
            </div>

            <div className="formItem">
              <br />
              <label for="industry">Industry</label>
              <select
                id="industry"
                placeholder="Select an Option"
                name="industry"
              >
                <option value="Select an option" disabled="" hidden="">
                  Select an option
                </option>
                <option value="Advertising/Marketing Agency">
                  Advertising/Marketing Agency
                </option>
                <option value="Automotive">Automotive</option>
                <option value="Beauty">Beauty</option>
                <option value="Consumer Goods">Consumer Goods</option>
                <option value="Education">Education</option>
                <option value="Fashion &amp; Apparel">
                  Fashion &amp; Apparel
                </option>
                <option value="Financial Services/Insurance">
                  Financial Services/Insurance
                </option>
                <option value="Food &amp; Beverage">Food &amp; Beverage</option>
                <option value="Gaming/Esports">Gaming/Esports</option>
                <option value="Government/Nonprofit">
                  Government/Nonprofit
                </option>
                <option value="Health &amp; Wellness">
                  Health &amp; Wellness
                </option>
                <option value="Media/Entertainment">Media/Entertainment</option>
                <option value="Sports">Sports</option>
                <option value="Technology/Software">Technology/Software</option>
                <option value="Telecommunications">Telecommunications</option>
                <option value="Travel &amp; Hospitality">
                  Travel &amp; Hospitality
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="formItem">
              <label for="message">Message *</label>
              <textarea
                id="message"
                placeholder="Enter message here..."
                name="message"
                cols="30"
                rows="5"
              ></textarea>
              <br />
              <br />
              <br />
              <br />
            </div>
            <button className="button" id="submit" type="submit">
              Submit
            </button>
            <span className="formStatus">{result}</span>
          </div>
        </form>
      </div>
    </div>
  );
}

function ContactForm(){
    return(
        <div class="contactContainer">
            <div class="contactForm">
                <form id="userForm" role="input" method="post" action="">
                    <legend class="formLegend">
                        <h2>CONTACT INFORMATION</h2>
                        <hr class="heroLine"/>
                    </legend>
                    <div class="formItems">

                        <div class="formItem">
                            <label for="firstname">First Name *</label>
                            <input id="firstname" placeholder="First Name" type="text" name="first" required/>
                        </div>

                        <div class="formItem">
                            <label for="lastname">Last Name *</label>

                            <input id="lastname" placeholder="Last Name" type="text" name="last" required/>
                        </div>

                        <div class="formItem">
                            <label for="email">Email *</label>
                            <input id="email" placeholder="Email" type="email" name="email" required/>
                        </div>

                        <div class="formItem">
                            <label for="phone">Phone</label>
                            <input id="phone" placeholder="Phone Number" type="text" name="cellphone"/>
                        </div>


                        <div class="formItem">
                            <br/>
                            <label for="industry">Industry</label>
                            <select id="industry" placeholder="Select an Option" name="industry">
                                <option value="Select an option" disabled="" hidden="">Select an option</option>
                                <option value="Advertising/Marketing Agency">Advertising/Marketing Agency</option>
                                <option value="Automotive">Automotive</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Consumer Goods">Consumer Goods</option>
                                <option value="Education">Education</option>
                                <option value="Fashion &amp; Apparel">Fashion &amp; Apparel</option>
                                <option value="Financial Services/Insurance">Financial Services/Insurance</option>
                                <option value="Food &amp; Beverage">Food &amp; Beverage</option>
                                <option value="Gaming/Esports">Gaming/Esports</option>
                                <option value="Government/Nonprofit">Government/Nonprofit</option>
                                <option value="Health &amp; Wellness">Health &amp; Wellness</option>
                                <option value="Media/Entertainment">Media/Entertainment</option>
                                <option value="Sports">Sports</option>
                                <option value="Technology/Software">Technology/Software</option>
                                <option value="Telecommunications">Telecommunications</option>
                                <option value="Travel &amp; Hospitality">Travel &amp; Hospitality</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div class="formItem">
                            <label for="message">Message *</label>
                            <textarea id="message" placeholder="Enter message here..." name="message" cols="30"
                                rows="5"></textarea>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        <button class="button" id="submit" type="submit">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default ContactForm;

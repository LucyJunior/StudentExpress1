function toggleClass() {
    var element = document.getElementById('contact');
    element.classList.toggle("active")
}

var contactUsPage = `

    <section>

        <div class="contact" id="contact">

            <h5 onClick="toggleClass()" class="contactus">Get in touch with us<span>+</span></h5>
            <form>
                <div class="row">
                    <div class="col-2">
                        <label>First Name</label>
                        <input type="text" name=" " class="text" placeholder="Manish"></input>
                    </div>


                    <div class="col-2">
                        <label>Last Name</label>
                        <input type="text" name=" " class="text" placeholder="Poduval"></input>
                    </div>

                    <div class="col-2">
                        <label>Email</label>
                        <input type="text" name=" " class="text" placeholder="ironhack@hotmail.com"></input>
                    </div>
                </div>

                <div class="row">
                    <div class="col-1">
                        <label>Your Message</label>
                        <textarea placeholder="Write your message here..."></textarea>
                    </div>
                </div>

                <div class="row">
                    <div class="col-1">
                        <input type="submit" name="" value="Send message"></input>
                    </div>
                </div>
            </form>
        </div>

    </section >
    
`
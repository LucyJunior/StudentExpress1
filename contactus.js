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
                       <label>First Name</label><input type="text" name=" " class="text" placeholder="Manish"></input>
                    </div>

                    <div class="col-2">
                         <label for="email">Email</label><input type="email" class="form-control" id="inputEmail" placeholder="Insert your email here">
                    </div>

                <div class="row">
                    <div class="col-1">
                        <label>Your Message</label><textarea placeholder="Write your message here..."></textarea>
                    </div>
                </div>

                <div class="row">
                     <div class="col-1">
                     <input type="submit" name="" value="Send message"></input>
                    </div>


                    
                        <div class="checkbox">
                            <label>
                                <input type="checkbox"> I want to receive communications from StudentExpress.</label>
                                
                         </div>
                           
            </form>
        </div>

    </section >

 `

//  <button type="submit" class="btn btn-default">Submit</button>
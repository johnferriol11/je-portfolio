export default function contact() {
    return `
        <section class="ms-rows-wrapper ms-contact" id="ms-contact">
            <div class="ms-cols-wrapper">
                <div class="ms-column lg-cols-12 sm-cols-12">
                    <form class="ms-form">
                        <h2 data-aos="fade-up" data-aos-duration="1000">Contact <span class="ms-text-highlight">Me</span></h2>
                        <div class="ms-input-wrapper">
                            <div class="ms-field-wrapper field-ms-form-name no-cursor">
                                <label for="ms-form-name" class="ms-label">Name</label>
                                <input type="text" class="ms-form-name" name="ms-form-name" id="ms-form-name" placeholder="Name">
                            </div>
                            <div class="ms-field-wrapper field-ms-form-email no-cursor">
                                <label for="ms-form-email" class="ms-label">Email</label>
                                <input type="email" class="ms-form-email" name="ms-form-email" access="false" id="ms-form-email" placeholder="Email">
                            </div>
                        </div>
                        <div class="ms-field-wrapper field-ms-form-subject no-cursor">
                            <label for="ms-form-subject" class="ms-label">Subject</label>
                            <input type="text" class="ms-form-subject" name="ms-form-subject" access="false" id="ms-form-subject" placeholder="Subject">
                        </div>
                        <div class="ms-field-wrapper field-ms-form-message no-cursor">
                            <label for="ms-form-message" class="ms-label">Message</label>
                            <textarea type="textarea" class="ms-form-message" name="ms-form-message" access="false" id="ms-form-message" placeholder="Message"></textarea>
                        </div>
                        <div class="ms-button magic-hover magic-hover__square">
                            <span class="text">Send Message</span>
                        </div>

                        <div class="ms-success ms-message">Thank you! submission successfully</div>
                        <div class="ms-error ms-message">Oh no! submission failed</div>
                    </form>
                </div>
                <div class="ms-column lg-cols-12 sm-cols-12">
                    <div id="map"></div> 
                </div>
            </div>
        </section>
    `;
};

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-[#D4A017] to-[#1B4D3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-serif mb-4">Contact Us</h1>
          <p className="text-xl">
            Get in touch for more information about India tourism
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-[#333333] mb-8">Get In Touch</h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-[#333333] font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-[#D4A017] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  />
                </div>

                <div>
                  <label className="block text-[#333333] font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-[#D4A017] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  />
                </div>

                <div>
                  <label className="block text-[#333333] font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-[#D4A017] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  />
                </div>

                <div>
                  <label className="block text-[#333333] font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 border border-[#D4A017] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4A017] hover:bg-[#C49316] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-serif text-[#333333] mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-[#D4A017] mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-1">Phone</h3>
                    <p className="text-[#666666]">+91-172-2560200</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-[#D4A017] mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-1">Email</h3>
                    <p className="text-[#666666]">info@incredibleindia.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-[#D4A017] mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-1">Address</h3>
                    <p className="text-[#666666]">
                      Ministry of Tourism, India
                      <br />
                      New Delhi 110001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-[#D4A017] mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-1">Office Hours</h3>
                    <p className="text-[#666666]">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-[#333333] mb-12 text-center">
            Follow Our Social Media
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'Facebook', handle: '@IncredibleIndia' },
              { name: 'Instagram', handle: '@IncredibleIndiaOfficial' },
              { name: 'Twitter', handle: '@IncredibleIndia' },
              { name: 'YouTube', handle: 'Incredible India' },
            ].map((social, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-serif text-[#D4A017] mb-2">{social.name}</h3>
                <p className="text-[#666666]">{social.handle}</p>
                <button className="mt-4 text-[#D4A017] hover:text-[#C49316] font-semibold">
                  Follow →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

import TravelTips from '../components/TravelTips';

const TravelTipsPage = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-[#1B4D3E] to-[#D4A017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-serif mb-4">Travel Tips</h1>
          <p className="text-xl">
            Everything you need to know for a memorable Haryana experience
          </p>
        </div>
      </section>

      <TravelTips />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-[#333333] mb-12 text-center">
            Practical Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F7F3E9] rounded-lg p-8">
              <h3 className="text-2xl font-serif text-[#333333] mb-4">Accommodation</h3>
              <p className="text-[#666666] mb-4">
                Haryana offers a range of accommodations from budget guesthouses to luxury
                resorts. Major cities like Gurugram and Faridabad have excellent hotel options.
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li>• Budget Hotels: Rs 1000-2000</li>
                <li>• Mid-range: Rs 2000-5000</li>
                <li>• Luxury: Rs 5000+</li>
                <li>• Heritage Hotels: Unique experiences</li>
              </ul>
            </div>

            <div className="bg-[#F7F3E9] rounded-lg p-8">
              <h3 className="text-2xl font-serif text-[#333333] mb-4">Transportation</h3>
              <p className="text-[#666666] mb-4">
                Getting around Haryana is convenient with multiple transport options available.
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li>• Buses: Frequent and affordable</li>
                <li>• Taxis & Cabs: App-based services</li>
                <li>• Train: Good connectivity to Delhi</li>
                <li>• Rental Cars: For flexibility</li>
              </ul>
            </div>

            <div className="bg-[#F7F3E9] rounded-lg p-8">
              <h3 className="text-2xl font-serif text-[#333333] mb-4">Safety Tips</h3>
              <p className="text-[#666666] mb-4">
                Haryana is generally a safe destination. Follow these basic precautions.
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li>• Keep valuables secure</li>
                <li>• Avoid traveling alone at night</li>
                <li>• Use registered taxis</li>
                <li>• Stay aware of surroundings</li>
              </ul>
            </div>

            <div className="bg-[#F7F3E9] rounded-lg p-8">
              <h3 className="text-2xl font-serif text-[#333333] mb-4">Documents Required</h3>
              <p className="text-[#666666] mb-4">
                Essential documents for your trip to Haryana.
              </p>
              <ul className="space-y-2 text-[#666666]">
                <li>• Valid ID proof (Passport/Aadhar)</li>
                <li>• Travel insurance (recommended)</li>
                <li>• Driver's license (if planning to drive)</li>
                <li>• Hotel bookings confirmation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F7F3E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-[#333333] mb-8 text-center">
            Packing Checklist
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-serif text-[#333333] mb-4">Essentials</h3>
              <ul className="space-y-2 text-[#666666]">
                <li>✓ Light, breathable clothing</li>
                <li>✓ Sun protection (sunscreen, hat)</li>
                <li>✓ Comfortable walking shoes</li>
                <li>✓ Water bottle</li>
                <li>✓ Medications</li>
                <li>✓ Phone charger</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-serif text-[#333333] mb-4">For Temple Visits</h3>
              <ul className="space-y-2 text-[#666666]">
                <li>✓ Modest clothing</li>
                <li>✓ Slip-on shoes</li>
                <li>✓ Scarf or dupatta</li>
                <li>✓ Flowers (offering)</li>
                <li>✓ Small donations</li>
                <li>✓ Camera for photography</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelTipsPage;

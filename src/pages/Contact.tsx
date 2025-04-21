
import contactBanner from "../assets/Contact Banner.png"; // Adjust the path if needed

const Contact = () => {
  return (
    <section className="bg-gray-100">
      {/* Banner */}
      <div
        className="w-full h-[300px] bg-cover bg-center mt-16"
        style={{
          backgroundImage: `url(${contactBanner})`,
        }}
      ></div>

      {/* Form Section */}
      <div className="pt-[5rem] pb-[12rem] container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Get In Touch With Us
        </h2>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email address"
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="Phone number"
              className="p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <textarea
            placeholder="Write message"
            className="w-full p-2 border border-gray-300 rounded-lg mt-4"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

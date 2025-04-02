const Contact = () => {
  return (
    <section className="container mx-auto my-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
      <div className="flex flex-col items-center">
        <p className="text-lg text-gray-700">
          📍 Location: Chennai, Tamil Nadu, India
        </p>
        <p className="text-lg text-gray-700">
          📧 Email: @.com
        </p>
        <p className="text-lg text-gray-700">📞 Phone: +91 </p>
        <form className="mt-6 w-full max-w-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <button className="px-6 py-2 bg-yellow-500 text-white rounded-md">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

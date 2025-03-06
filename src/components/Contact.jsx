const Contact = () => {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">Have questions or inquiries? Reach out to us!</p>
  
        <form className="mt-8 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 mb-4 border rounded-md" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 mb-4 border rounded-md" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 mb-4 border rounded-md"></textarea>
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  
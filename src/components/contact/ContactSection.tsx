import Footer from "./Footer";

const ContactSection = () => {
  return (
    <section
      className="p-4 relative min-h-screen w-full bg-footer-bg  bg-no-repeat bg-cover"
      id="contact"
    >
      <div className="w-full mx-auto my-12 px-6 py-24 z-[99] bg-white rounded-lg border max-w-[1224px] shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-4 md:flex-row items-center justify-between">
        <h3 className="text-4xl">
          {" "}
          Want to work with us? <span className="font-bold"> Get in Touch</span>
        </h3>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Email"
            className="p-3 border-y-2 border-s-2 rounded-s-md w-5/6"
          />
          <button className="text-white bg-button hover:bg-button-hover rounded-e-md w-2/6">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactSection;

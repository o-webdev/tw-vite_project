import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    setIsLoading(true)

    emailjs.sendForm('service_dsobdp4', 'template_uhv3yfe', form.current, 'dXbdy5EUmS3fKAEph')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent successfully")
      }, (error) => {
          console.log(error.text);
          toast.error("Error sending message")
      }
    )
    .finally(() => {
      setIsLoading(false) // Reset loading state
    });

  e.target.reset();
  }

  
  return (
    <section className="border border-black/10 bg-stone-400/20 m-[30px]
      px-[40px] pt-[40px] pb-[20px] rounded-3xl">
      <container className="m-auto max-w-[1200px]">
        <h2 className="mb-[15px] font-light text-[22px] md:text-[28px]">
          Get in touch
        </h2>
        <p className="max-w-[803px] text-[13px] md:text-[14px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam totam
          sapiente expedita cupiditate et delectus laudantium aliquam. Animi
          facere sequi minus perferendis, quam cupiditate praesentium.
        </p>

        {/* FORM CODE START */}
        <form
          ref={form} 
          onSubmit={sendEmail}
          className="mt-[30px]"
          noValidate=""   
        >
        <div className="grid grid-cols-2 gap-[16px]">
          <div>
            <label 
              className="block"
              >
              <span className="mb-1 text-[13px] tracking-[6px] ml-1">
                NAME
              </span>
              <input
                required 
                type="text"
                name="name"
                placeholder="enter your name" 
                className="block p-2 mt-3 text-[13px] w-full rounded-md" 
              />
              </label>
          </div>

          <div>
            <label 
              className="block"
              >
              <span className="mb-1 text-[13px] tracking-[6px] ml-1">
                EMAIL
              </span>
              <input
                required 
                type="email"
                name="email"
                placeholder="enter your name" 
                className="block p-2 mt-3 mb-3 text-[13px] w-full rounded-md" 
              />
              </label>
          </div>
        </div>

        <div>
          <label className="block"
          >
          <span className="flex mb-3 mt-3 text-[13px] tracking-[6px] ml-1">
            SUBJECT
          </span>
          <select
            required 
            name="subject" 
            className="p-2 mb-3 text-[13px] rounded-md"
            >
            <option>Ask a question</option>
            <option>Request a quote</option>
            <option>Something else</option>
            </select>
          </label>
        </div>

        <label className="block"
        >
          <span className="mb-[5px] text-[13px] tracking-[6px] ml-1">
            MESSAGE
          </span>
          <textarea
            required 
            name="message" 
            rows="3" 
            className="w-full p-2 mt-3 rounded-md" />
        </label>
        
        <button 
          type="submit"
          disabled={isLoading}
          className="w-full md:w-auto mt-3 px-4 py-3 text-sm md:text-[16px]
          rounded-xl border border-transparent bg-black text-white 
          hover:border hover:border-black hover:bg-white hover:text-black
          flex ml-auto justify-center">
          {isLoading ? "Loading..." : "Submit"}
          <ToastContainer />
        </button>


        </form>
      </container>
    </section>
  );
};

export default Contact;

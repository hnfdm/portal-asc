import Image from "next/image";
import bg from "../../../../public/background/bg-contact.jpg";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Get in Touch with Airdrop ASC
          </h1>
          <p className="text-center font-light text-sm xs:text-base text-justify">
          Have questions, suggestions, or need assistance? We're here to help! Use the form below to send us a message, and our team will get back to you as soon as possible. Join the conversation and be part of our growing community. Let's connect! 🚀
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}

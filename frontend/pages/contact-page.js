import Layout from "../components/Layout";
import Image from "next/images";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact Info</p>
        </div>
        <div className="flex justify-center mt-4">
          <image
            className="rounded-full"
            src="/avatar.jpg"
            width={60}
            alt={60}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

import React from "react";
import Title from "../components/Title";
import { assets } from '../assets/assets';
import NewLetterBox from "../components/NewLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title title1={`About`} title2={`us`} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" alt="About Images" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis perferendis velit dignissimos asperiores omnis nisi aliquam. Vero, molestias amet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, enim.</p>
          <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fuga ad aperiam maiores laboriosam perspiciatis beatae neque eos provident. Laborum doloremque unde rerum fuga! Accusamus dicta aperiam voluptatibus repellat beatae.</p>
          <b className="text-gray-800">Our Mission</b>
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquam aliquid consequatur reiciendis quam nam quis est neque numquam dolorem veritatis, fugit ipsam amet facilis sed tempore, voluptatibus, velit iure.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title title1={`Why`} title2={`choose us`} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurence :</b>
          <p className="text-gray-60 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at, fuga labore distinctio tempore iure amet mollitia neque error modi.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience :</b>
          <p className="text-gray-60 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at, fuga labore distinctio tempore iure amet mollitia neque error modi.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer service :</b>
          <p className="text-gray-60 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at, fuga labore distinctio tempore iure amet mollitia neque error modi.</p>
        </div>
      </div>

      <NewLetterBox/>
    </div>
  );
};

export default About;

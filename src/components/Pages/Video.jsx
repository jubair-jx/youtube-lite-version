import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Playes from "../VideoDescription/Playes";
import VideoDes from "../VideoDescription/VideoDes";
import RelatedVideoList from "../VideoDescription/RelatedVideoList";

const Video = () => {
  return (
    <>
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
              <Playes></Playes>

              <VideoDes></VideoDes>
            </div>

            <RelatedVideoList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Playes from "../VideoDescription/Playes";
import VideoDes from "../VideoDescription/VideoDes";
import RelatedVideoList from "../VideoDescription/RelatedVideoList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDyVideo } from "../../features/video/dyVideoSlice";
import Loading from "../Ui/Loading";

const Video = () => {
  const { dyVideo, isLoading, isError, error } = useSelector(
    (state) => state.dyVideo
  );
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();
  const { videoId } = useParams();
  useEffect(() => {
    dispatch(fetchDyVideo(videoId));
  }, [dispatch, videoId]);

  const { link, thumbnail, title, id } = dyVideo || {};

  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && !dyVideo?.id) {
    content = <div className="col-span-12">Not Found Video</div>;
  }
  if (!isError && !isLoading && dyVideo?.id) {
    content = (
      <div class="grid grid-cols-3 gap-2 lg:gap-8">
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
          <Playes link={link} title={title}></Playes>

          <VideoDes video={dyVideo}></VideoDes>
        </div>

        <RelatedVideoList relatedId={id} tags={tags} />
      </div>
    );
  }
  return (
    <>
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
      </section>
    </>
  );
};

export default Video;

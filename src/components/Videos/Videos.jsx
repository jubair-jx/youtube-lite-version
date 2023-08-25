import React, { useEffect } from "react";
import SingleVideo from "./SingleVideo/SingleVideo";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../../features/videos/VideoSlice";
import Loading from "../Ui/Loading";

const Videos = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  const { tags, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideo({ tags, search }));
  }, [dispatch, tags, search]);

  let content;
  if (isLoading) content = <Loading></Loading>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && videos?.length === 0) {
    content = <div className="col-span-12">Not Found Videos</div>;
  }
  if (!isError && !isLoading && videos?.length > 0) {
    content = videos.map((video) => (
      <SingleVideo video={video} key={video.id}></SingleVideo>
    ));
  }
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}

          {/* <div className="col-span-12">some error happened</div> */}
        </div>
      </section>
    </section>
  );
};

export default Videos;

import React, { useEffect } from "react";
import RelatedVdoListItem from "./RelatedVdoListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo } from "../../features/RelatedVideo/RelatedVideoSlice";
import Loading from "../Ui/Loading";
const RelatedVideoList = ({ relatedId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideo, isError, isLoading, error } = useSelector(
    (state) => state.RelatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideo({ tags, id: relatedId }));
  }, [dispatch, relatedId, tags]);
  const { link, thumbnail, title, id } = relatedVideo || {};
  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedVideo?.length === 0) {
    content = <div className="col-span-12">No related videos found!</div>;
  }
  if (!isLoading && !isError && relatedVideo?.length > 0) {
    content = relatedVideo.map((video) => (
      <RelatedVdoListItem key={video.id} video={video} />
    ));
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;

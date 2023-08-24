import React from "react";
import like from "../../assets/like.svg";
import unike from "../../assets/unlike.svg";

const LikeUnlike = ({ unlikes, likes }) => {
  return (
    <div class="flex gap-10 w-48">
      <div class="flex gap-1">
        <div class="shrink-0">
          <img class="w-5 block" src={like} alt="Like" />
        </div>
        <div class="text-sm leading-[1.7142857] text-slate-600">{unlikes}K</div>
      </div>
      <div class="flex gap-1">
        <div class="shrink-0">
          <img class="w-5 block" src={unike} alt="Unlike" />
        </div>
        <div class="text-sm leading-[1.7142857] text-slate-600">{likes}K</div>
      </div>
    </div>
  );
};

export default LikeUnlike;

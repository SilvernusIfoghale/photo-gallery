import React, { useState } from "react";
import like from "../../public/like.png";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState();
  const [page, setPage] = useState(1);

  const URL = "https://api.unsplash.com/photos";
  const API_KEY = "1SZPoIEiMsQKTbxOKwXYPyR167N8OtfJpcnBIHyVQfU";
  return (
    <>
      <div className="w-full">
        <div className="text-center text-5xl font-bold my-10">
          Photo Gallery
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 place-items-center w-full">
          {photos?.map((photo, index) => (
            <div
              className="border-4 mx-3 my-7 border-blue-300 h-[420px]  w-[390px] sm:h-[420px] sm:w-[310px] rounded-lg overflow-hidden relative"
              key={index}
            >
              <div className=" h-[315px] w-[395px] sm:h-[315px] sm:w-[375px]  ">
                <img
                  className="object-cover w-full h-full"
                  src={photo.urls.regular}
                  alt={photo.urls.alt_description}
                />
              </div>
              <div className="absolute w-full border-t-2 bottom-0">
                <div className="rounded-full w-12 h-12 overflow-hidden border-2 ml-2 border-blue-200 mt-3">
                  <img
                    className="object-cover w-full h-full"
                    src={photo.user.profile_image.medium}
                  />
                </div>
                <div className="flex justify-between pr-4 pl-1 pb-3 ">
                  <p className="font-semibold italic ">{photo.user.name}</p>
                  <div className="flex gap-1 items-center">
                    <div className=" w-5 h-5">
                      <img src={like} alt="likes" />
                    </div>
                    <p className="italic text-sm font-semibold">
                      {photo.likes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

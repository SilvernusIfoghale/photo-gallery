import React, { useEffect, useState } from "react";
import like from "../../public/like.png";
import { ClipLoader } from "react-spinners";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState();
  const [page, setPage] = useState(1);
  const [loading, setIsLoading] = useState(false);

  const URL = "https://api.unsplash.com/photos";
  const API_KEY = "1SZPoIEiMsQKTbxOKwXYPyR167N8OtfJpcnBIHyVQfU";

  useEffect(() => {
    setIsLoading(true);
    fetch(`${URL}?page=${page}&per_page=15&client_id=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
    setIsLoading(false);
  }, [page]);

  return (
    <>
      <div className="w-full relative">
        <div className="text-center text-5xl font-bold my-10 bg-blue-200 py-8">
          Photo Gallery
        </div>
        {loading && (
          <ClipLoader size={130} className="absolute top-32 left-[50%]" />
        )}
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
        {photos && (
          <div className="text-center mb-11 mt-3">
            {page > 1 ? (
              <button
                onClick={() => setPage(page - 1)}
                className="bg-blue-500 text-white font-semibold h-10 w-28 mx-3 rounded-lg"
              >
                Previous
              </button>
            ) : (
              <button
                disabled
                className="bg-blue-300 text-white font-semibold h-10 w-28 mx-3 rounded-lg"
              >
                Previous
              </button>
            )}

            <button
              onClick={() => setPage(page + 1)}
              className="bg-blue-500 text-white font-semibold h-10 w-28 mx-3 rounded-lg"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

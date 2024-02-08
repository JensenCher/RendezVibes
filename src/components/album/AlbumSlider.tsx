"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { AudioPlayer } from "react-audio-play";

import { Swiper as SwiperType } from "swiper";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { client } from "../../../sanity/lib/client";
import { AlbumType } from "../../../types/Album";
import { SongType } from "../../../types/Song";
import Title from "../global/Title";
import { Skeleton } from "../ui/skeleton";

interface AlbumSliderProps {
  albums: AlbumType[] | [];
  multipleAlbums?: boolean;
}

interface AlbumSongsProps {
  albumId: string;
  songs: SongType[];
}

const AlbumSlider = (props: AlbumSliderProps) => {
  const { albums, multipleAlbums = true } = props;
  const [curAlbumId, setCurAlbumId] = useState<string | null>(null);
  const [albumSongs, setAlbumSongs] = useState<AlbumSongsProps[]>([]);
  const [fetchedAlbumIds, setFetchedAlbumIds] = useState<string[]>([]);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchSongsData = async () => {
    setIsLoading(true);
    if (curAlbumId) {
      // Check if id is in fetchedAlbumIds
      const fetchedBefore = fetchedAlbumIds.includes(curAlbumId);
      if (!fetchedBefore) {
        try {
          // Fetch songs filtered by albumId
          const songSchema = `*[_type == "song" && references($curAlbumId)]`;
          const songFields = `     
            _id, 
            _createdAt,
            order,
            name,
            tagline,
            "slug": slug.current,
            artist ->{name},
            album ->{name},
            audio { "audio": asset->url },
            description,
            type,`;
          const orderBy = `order(order asc)`;
          const songsQuery = `${songSchema} {${songFields}} | ${orderBy}`;
          const songsResult = await client.fetch(songsQuery, { curAlbumId });

          // Set the fetched album data to the state
          setAlbumSongs([...albumSongs, { albumId: curAlbumId, songs: songsResult }]);
        } catch (error) {
          console.error("Error fetching songs data:", error);
        }
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (albums.length) {
      // console.log("albums[0]._id", albums[0]._id);
      setCurAlbumId(albums[0]._id);
    }
  }, []); // The effect will run whenever albumId changes
  useEffect(() => {
    // console.log("fetching song");
    if (curAlbumId) {
      setFetchedAlbumIds([...fetchedAlbumIds, curAlbumId]);
      // Call the fetchSongsData function
      fetchSongsData();
    }
  }, [curAlbumId]); // The effect will run whenever albumId changes

  if (!albumSongs.length) {
    return (
      <>
        {multipleAlbums && (
          <div className="w-full flex justify-center">
            <Skeleton className="w-40 h-8 mb-5" />
          </div>
        )}
        <div className="w-full bg-secondary/30 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
          {/* image */}
          <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
            <Skeleton className="w-full h-full" />
          </div>
          {/* Track container */}
          <div className="flex flex-1 w-full h-[500px]">
            <div className="flex-1 flex flex-col xl:px-12 space-y-7">
              <SongPlaceHolder />
              <SongPlaceHolder />
              <SongPlaceHolder />
              <SongPlaceHolder />
              <SongPlaceHolder />
              <SongPlaceHolder />
              <SongPlaceHolder />
              <SongPlaceHolder />
            </div>
          </div>
        </div>
        {/* <p>No songs found for the album.</p> */}
      </>
    );
  }

  return (
    <>
      {/* Top Slider */}
      <Swiper
        effect={"coverflow"}
        speed={1000}
        spaceBetween={100}
        allowTouchMove={false}
        modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      >
        {albums.map((album) => {
          const curAlbum: AlbumSongsProps = albumSongs.find((alb) => alb.albumId === album._id) || ({} as AlbumSongsProps);
          return (
            <SwiperSlide key={album._id}>
              {multipleAlbums && <Title title={album.name} center={true} />}
              <div className="w-full bg-secondary/30 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
                {/* image */}
                <div className="hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
                  <Image src={album.logo.image} alt={album.logo.alt ? album.logo.alt : ""} fill priority className="object-cover object-center" />
                </div>
                {/* Track container */}
                <div className="flex flex-1 w-full h-[500px] overflow-auto scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-secondary/20 ">
                  <div className="flex-1 flex flex-col xl:px-12 space-y-2">
                    {!curAlbum && isLoading ? (
                      <>
                        <SongPlaceHolder />
                        <SongPlaceHolder />
                        <SongPlaceHolder />
                      </>
                    ) : curAlbum && (!curAlbum.songs || (curAlbum.songs && !curAlbum.songs.length)) ? (
                      <>No songs found.</>
                    ) : (
                      curAlbum.songs.map((song, index) => {
                        return (
                          <div key={song._id} className="flex w-full">
                            {/* track name */}
                            <div className="flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold">
                              <div className="text-primary">
                                {song.order < 10 ? "0" : null}
                                {song.order}.
                              </div>
                              <div className="text-sm xl:text-base">{song.name}</div>
                            </div>
                            {/* player */}
                            <div>
                              <AudioPlayer
                                style={{
                                  background: "transparent",
                                  boxShadow: "none",
                                  width: "100%",
                                  height: "55px",
                                }}
                                src={song.audio.audio}
                                loop
                                preload="none"
                                color="#fff"
                                volume={40}
                                volumePlacement={index > 1 ? "top" : "bottom"}
                              />
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Thumb Slider */}
      {multipleAlbums && (
        <Swiper
          onSwiper={(swiper) => {
            setThumbsSwiper(swiper);
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1310: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="mt-10"
        >
          {albums.map((thumb, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={() => {
                  setCurAlbumId(thumb._id);
                  fetchSongsData();
                }}
              >
                {/* img */}
                <div
                  className={`relative w-[180px] h-[180px] rounded-[10px] overflow-hidden border-4 ${
                    curAlbumId === thumb._id ? "border-primary" : "border-transparent"
                  } hover:border-primary duration-300 cursor-pointer`}
                >
                  <Image src={thumb.logo.image} alt={thumb.logo.alt ? thumb.logo.alt : ""} fill priority className="object-cover object-center" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};

export default AlbumSlider;

const SongPlaceHolder = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold">
        <Skeleton className="mt-4 w-1/12 h-4 rounded-lg" />
        <Skeleton className="mt-4 w-8/12 h-4 rounded-lg" />
      </div>
      <div className="flex items-center">
        <Skeleton className="mt-4 w-48 h-4 rounded-lg" />
      </div>
    </div>
  );
};

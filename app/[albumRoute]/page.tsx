"use client";
import { useParams } from "next/navigation";
import { Button } from "@heroui/button";
import { ArrowLeftCircleIcon, Camera, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import Video from "next-video";
import Image from 'next/image';

import gallery from "../../config.gallery";
import config from "../../config";

import { ThemeSwitch } from "@/components/theme-switch";

export default function Album() {
  const params = useParams<{ albumRoute: string }>();

  const results = gallery.albums.filter(
    (album) => album.route === params.albumRoute
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-4 z-40">
      {/* albuns modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                My Albums ❤️
              </ModalHeader>
              <ModalBody className="flex flex-row items-center justify-center flex-wrap">
                {gallery.albums.map((album) => (
                  <motion.a
                    key={album.route}
                    className="flex flex-col items-center justify-center rounded-lg  border-2 border-primary shadow-custom"
                    href={album.route}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                  >
                    <img
                      alt="album cover"
                      className="w-32 h-32 rounded-t-md"
                      src={album.coverImageSrc}
                    />
                    <Button
                      className="w-full bg-foreground-100 rounded-b-lg font-normal border-t-2 border-primary"
                      radius="none"
                    >
                      {album.title}
                    </Button>
                  </motion.a>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button
                  className="text-white"
                  color="primary"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex flex-row gap-6">
        <Button isIconOnly onPress={() => window.location.replace("/")}
          variant="faded"
          className="hover:bg-primary bg-background shadow-custom">
          <ArrowLeftCircleIcon />
        </Button>
        <ThemeSwitch />
        <Button isIconOnly color="secondary"
          variant="faded"

          className="hover:bg-primary bg-background shadow-custom text-foreground" onPress={onOpen}>
          <Camera />
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        {results.map((album, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-4"
          >
            <h1 className="text-2xl">{album.title}</h1>
            <div
            className="flex flex-row flex-wrap items-center justify-center gap-8"
            >
              {album.posts.map((image, i) => {
                const {
                  isOpen: isImageOpen,
                  onOpen: onImageOpen,
                  onOpenChange: onImageOpenChange,
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                } = useDisclosure();

                return (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center justify-center cursor-pointer shadow-custom rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    onClick={onImageOpen}
                  >
                    <Modal
                      isOpen={isImageOpen}
                      onOpenChange={onImageOpenChange}
                    >
                      <ModalContent className={image.videoSrc ? "scale-100 lg:scale-150" : ""}>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col">
                              {image.title}
                            </ModalHeader>
                            <ModalBody className="flex flex-row items-center justify-center flex-wrap">
                              {image.videoSrc ? (
                                <Video
                                  autoPlay
                                  accentColor={config.accentColor}
                                  src={image.videoSrc}
                                />
                              ) : (
                                <Image
                                  alt={"image of " + image.title}
                                  src={image.src}
                                  className="object-cover"
                                  width={240}
                                  height={240}
                                  priority
                                />
                              )}
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                className="text-white"
                                color="primary"
                                onPress={onClose}
                              >
                                Close
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                    <img alt=""
                      className="w-52 h-52 rounded-md object-cover" src={image.src} />
                    <h1 className="mt-[-1.5rem] rounded-md text-white font-bold  w-full text-center">
                      {image.title}
                    </h1>
                    {image.videoSrc && (
                      <PlayCircle className="absolute w-12 h-12" color="white" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
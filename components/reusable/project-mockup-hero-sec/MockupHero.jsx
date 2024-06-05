import Image from "next/image";
import React from "react";

const MockupHero = ({
  referredImg,
  title,
  itemOne,
  itemTwo,
  itemThree,
  itemFour,
  itemFive,
  bulletPoint,
}) => {
  return (
    <main className="mt-16">
      <div id="first-section">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:pb-12 lg:px-8 lg:py-2">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt={title}
                src={referredImg}
                quality={70}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>

              <div className="mt-4 text-gray-600">
                <ul className="flex flex-col">
                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemOne}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemTwo}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemThree}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemFour}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemFive}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="second-section">
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:pb-16 sm:py-12 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                alt={title}
                src={referredImg}
                quality={70}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover rounded-lg"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-3xl font-bold sm:text-4xl pb-4">{title}</h2>
              <div className="space-y-4 text-gray-600">
                <ul className="flex flex-col">
                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemOne}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemTwo}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemThree}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemFour}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemFive}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="third-section">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:pb-12 lg:px-8 lg:py-2">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt={title}
                src={referredImg}
                quality={70}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>

              <div className="mt-4 text-gray-600">
                <ul className="flex flex-col">
                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemOne}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemTwo}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemThree}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemFour}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={bulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {itemFive}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MockupHero;

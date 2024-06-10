import Image from "next/image";
import React from "react";

const MockupHero = ({
  desktopTitle,
  tabletTitle,
  mobileTitle,
  desktopParagraph,
  tabletParagraph,
  moblieParagraph,
  desktopImg,
  tabletImg,
  mobileImg,
  desktopBulletPoint,
  tabletBulletPoint,
  mobilebulletPoint,
  desktopList1,
  desktopList2,
  desktopList3,
  desktopList4,
  desktopList5,
  tabletList1,
  tabletList2,
  tabletList3,
  tabletList4,
  tabletList5,
  mobileList1,
  mobileList2,
  mobileList3,
  mobileList4,
  mobileList5


}) => {
  return (
    <main className="mt-16">
      <div id="first-section">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:pb-12 lg:px-8 lg:py-2">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt={desktopTitle}
                src={desktopImg}
                quality={100}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                height={500}
                width={500}
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl pb-4">{desktopTitle}</h2>
              <p className="text-sm text-gray-600">{desktopParagraph}</p>
              <div className="mt-4 text-gray-600">
                <ul className="flex flex-col">
                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={desktopBulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {desktopList1}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={desktopBulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {desktopList2}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={desktopBulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {desktopList3}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={desktopBulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {desktopList4}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={desktopBulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {desktopList5}
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
                alt={tabletTitle}
                src={tabletImg}
                quality={100}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover rounded-lg"
                height={500}
                width={500}
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-3xl font-bold sm:text-4xl pb-4">{tabletTitle}</h2>
              <p className="text-sm text-gray-600">{tabletParagraph}</p>
              <div className="space-y-4 mt-4  text-gray-600">
                <ul className="flex flex-col">
                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={tabletBulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {tabletList1}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={tabletBulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {tabletList2}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={tabletBulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {tabletList3}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={tabletBulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {tabletList4}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={tabletBulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {tabletList5}
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
                alt={mobileTitle}
                src={mobileImg}
                quality={100}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                height={500}
                width={500}
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl pb-4">{mobileTitle}</h2>
              <p className="text-sm text-gray-600">{moblieParagraph}</p>

              <div className="mt-4 text-gray-600">
                <ul className="flex flex-col">
                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={mobilebulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {mobileList1}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={mobilebulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {mobileList2}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={mobilebulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {mobileList3}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={mobilebulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {mobileList4}
                  </li>

                  <li className="inline-flex items-center my-1.5 text-lg font-semibold">
                    <Image
                      src={mobilebulletPoint}
                      height={22}
                      width={22}
                      alt="Bulltet-Points"
                      className="mr-3"
                    />
                    {mobileList5}
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

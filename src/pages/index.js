import React from "react";
import Image from "next/image";
import { ImAirplane } from "react-icons/im";
import { FaBalanceScale } from "react-icons/fa";
import Link from "next/link";
const HomePage = () => {
  return (
    <div className=" col-xl-9 col-12   py-xl-3 vh-100 ">
      <div className="  border border-dark rounded-8 text-center border-2 h-100">
        <h5 className="py-3 text-white mx-auto bg-primary rounded-top-4">
          ملی یار | مگا کافی نت آنلاین
        </h5>
        <div className="content-data  mx-auto">
          <div className="image-container ">
            <Image
              className="rounded-9 border border-white image"
              src={"/images/banner.png"}
              alt="banner"
              layout="fill"
            ></Image>
          </div>
          <div className="logoDiv mx-auto">
            <Image
              src={"/images/logo.webp"}
              alt="logo"
              width={140}
              height={140}
              layout="responsive"
              className="  logo bg-white   rounded-circle p-md-1 p-1  "
            />
          </div>
          <div className=" content-sub-data ">
            <div className="row ">
              <div className="col-3 col-md-4c col-lg-5c col-xl-6c col-xxl-8c ">
                <Link href="/secondPage">
                  <div className="  mt-3 rounded-2 shadow content-sub-data-bg p-4">
                    <ImAirplane className="display-5  text-secondary " />
                  </div>
                </Link>
                <p className="font-weight-bold py-2">خدمات بلیط</p>
              </div>
              <div className=" col-3 col-md-4c col-lg-5c col-xl-6c col-xxl-8c ">
                <div className="content-sub-data-bg   mt-3 rounded-2 shadow p-4">
                  <FaBalanceScale className="display-5  text-secondary" />
                </div>
                <p className="font-weight-bold py-2">خدمات بلیط</p>
              </div>
              <div className=" col-3 col-md-4c col-lg-5c col-xl-6c col-xxl-8c ">
                <div className="content-sub-data-bg   mt-3 rounded-2 shadow p-4">
                  <FaBalanceScale className="display-5  text-secondary" />
                </div>
                <p className="font-weight-bold py-2">خدمات بلیط</p>
              </div>
              <div className=" col-3 col-md-4c col-lg-5c col-xl-6c col-xxl-8c ">
                <div className="content-sub-data-bg   mt-3 rounded-2 shadow p-4">
                  <FaBalanceScale className="display-5  text-secondary" />
                </div>
                <p className="font-weight-bold py-2">خدمات بلیط</p>
              </div>
              <div className=" col-3 col-md-4c col-lg-5c col-xl-6c col-xxl-8c ">
                <div className="content-sub-data-bg   mt-3 rounded-2 shadow p-4">
                  <FaBalanceScale className="display-5  text-secondary" />
                </div>
                <p className="font-weight-bold py-2">خدمات بلیط</p>
              </div>
              <div className=" col-3 col-md-4c col-lg-5c col-xl-6c col-xxl-8c ">
                <div className="content-sub-data-bg   mt-3 rounded-2 shadow p-4">
                  <FaBalanceScale className="display-5  text-secondary" />
                </div>
                <p className="font-weight-bold py-2">خدمات بلیط</p>
              </div>
              <div className=" col-3 col-md-4c col-lg-5c col-xl-6c col-xxl-8c ">
                <div className="content-sub-data-bg   mt-3 rounded-2 shadow p-4">
                  <FaBalanceScale className="display-5  text-secondary" />
                </div>
                <p className="font-weight-bold py-2">خدمات بلیط</p>
              </div>
              <div className=" col-3 col-md-4c col-lg-5c col-xl-6c col-xxl-8c ">
                <div className="content-sub-data-bg   mt-3 rounded-2 shadow p-4">
                  <FaBalanceScale className="display-5  text-secondary" />
                </div>
                <p className="font-weight-bold py-2">خدمات بلیط</p>
              </div>
              <div className=" col-3 col-md-4c col-lg-5c col-xl-6c col-xxl-8c ">
                <div className="content-sub-data-bg   mt-3 rounded-2 shadow p-4">
                  <FaBalanceScale className="display-5  text-secondary" />
                </div>
                <p className="font-weight-bold py-2">خدمات بلیط</p>
              </div>
              <div className=" col-3 col-md-4c col-lg-5c col-xl-6c col-xxl-8c ">
                <div className="content-sub-data-bg   mt-3 rounded-2 shadow p-4">
                  <FaBalanceScale className="display-5  text-secondary" />
                </div>
                <p className="font-weight-bold py-2">خدمات بلیط</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

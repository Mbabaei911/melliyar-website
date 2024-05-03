import React from "react";
import Image from "next/image";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { FaTableList } from "react-icons/fa6";
import { MDBBtn } from "mdb-react-ui-kit";
import { TbDoorEnter } from "react-icons/tb";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";
function AsidePage() {
  return (
    <aside class="col-3 d-none d-xl-block vh-100 py-3">
      <div className=" border border-2 border-dark  h-100 mx-1  rounded-8 p-2 d-flex flex-column  justify-content-around">
        <div>
          <div className="text-center mb-3">
            <Image
              src="/images/logo2.webp"
              width={150}
              height={150}
              alt="register logo"
            />
          </div>
          <div className="row text-center  px-1 g-2">
            <div className="col-4 ">
              <div className="p-1  aside-items-bg rounded-3 border border-secondary border-2">
                <FaHome className="h3 text-secondary mt-2" />
                <p className="aside-text-font">خانه </p>
              </div>
            </div>
            <div className="col-4  ">
              <div className="p-1  aside-items-bg rounded-3">
                <IoNewspaper className="h3 text-secondary mt-2" />
                <p className="aside-text-font">مجله </p>
              </div>
            </div>
            <div className="col-4 ">
              <div className="p-1  aside-items-bg rounded-3">
                <FaRegQuestionCircle className="h3 text-secondary mt-2" />
                <p className="aside-text-font text-wrap">سوالات </p>
              </div>
            </div>
            <div className="col-4 ">
              <div className="p-1  aside-items-bg rounded-3">
                <MdSecurity className="h3 text-secondary mt-2" />
                <p className="aside-text-font">محرمانگی </p>
              </div>
            </div>
            <div className="col-4 ">
              <div className="p-1  aside-items-bg rounded-3">
                <FaTableList className="h3 text-secondary mt-2" />
                <p className="aside-text-font">سفارشات </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 ">
          <div className="text-center mb-3">
            <Image
              src="/images/enamad.png"
              width={150}
              height={150}
              alt="E sign logo"
            />
          </div>
          <div className="d-flex align-items-center justify-content-center ">
            <MDBBtn
              rounded
              outline
              className="btn  px-5 text-lg text-center d-flex align-items-center justify-content-center enteringButton "
            >
              <h5 className="px-2">ورود</h5>
              <TbDoorEnter className="h3 text-secondary " />
            </MDBBtn>
          </div>
          <div className="d-flex align-items-center justify-content-around mt-3 text-secondary border-bottom border-dark pb-2 mt-3">
            <LiaLinkedinIn className="fs-3 cursor-pointer" />
            <BsTelephone className="fs-3 cursor-pointer"/>
            <MdOutlineEmail  className="fs-3 cursor-pointer"/>
            <RiMovie2Fill className="fs-3 cursor-pointer" />
          </div>
          <div className="text-center mt-3">
            <Image
              src="/images/logo2.webp"
              width={70}
              height={70}
              alt="register logo"
              className="border border-dark rounded-6 border-1 p-1 cursor-pointer"
            />
            <Image
              src="/images/logo2.webp"
              width={70}
              height={70}
              alt="register logo"
              className="border border-dark rounded-6 border-1 p-1 mx-1 cursor-pointer"
            />
            <Image
              src="/images/logo2.webp"
              width={70}
              height={70}
              alt="register logo"
              className="border border-dark rounded-6 border-1 p-1 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AsidePage;

import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row posionit-relative" style={{height: "60rem"}}>
          <div className="col-3">
            <h1 className="position-relative text-primary fs-160 z-1">
              CONNECT
              <br /> TECHNOLOGY
            </h1>
          </div>
          <div className="col">
            <div className="position-relative top-30 start-20">
              <Image
                src="/banner.png"
                alt="banner"
                width="1278" height="688"
              />
            </div>
          </div>
        </div>

        <div className="row posionit-relative mb-5">
          <div className="col-3 d-flex">
            <Image src="/art_01.png" width={42.92} height={265.71} alt="art" />
          </div>

          <div className="col-9">
            <h2>connect for the better</h2>
            <p>
              At DSU, we never cease to develop and innovate financial
              technologies on top of our &quot;Customer First&quot; mindset, We
              are the driving force behind KBank&apos;s success as well as their
              navigator exploring the digital world beyond Thailand. Our
              wide-ranging online banking services are equipped with concrete
              infrastructure and strong barriers capable of guarding
              customers&apos; valuable assets and data. Utilizing our expertise
              in FinTech business, combined with new generation&apos;s
              outside-the-box thinking, KBTG aims to transform into the best
              tech organization of Southeast Asia.
            </p>
            <button
              type="button"
              className="btn btn-light rounded-pill"
              style={{ color: "#1ED0BD" }}
            >
              More stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image'

export default function About() {
    return (
        <div>
            <div className="row" style={{height: "550px"}}>
                <div className='col-4'>
                    <h1 style={{position: 'absolute', fontSize: '150px', color: '#1ED0BD', zIndex:1}}>CONNECT<br/> TECHNOLOGY</h1>
                </div>
                <div className='col' >
                    <Image src="/banner.png" width={1278} height={688} />
                </div>
            </div>

            <div class="row">
                <div className='col-4 d-flex justify-content-center'>
                    <Image src="/art_01.png" width={42.92} height={265.71} />
                </div>

                <div className='col'>
                    <h2>
                        connect for the better
                    </h2>
                    <p>
                        At DSU, we never cease to develop and innovate financial technologies on top of our
                        “Customer First” mindset. We are the driving force behind KBank’s success as well as
                        their navigator exploring the digital world beyond Thailand. Our wide-ranging online
                        banking services are equipped with concrete infrastructure and strong barriers capable
                        of guarding customers’ valuable assets and data. Utilizing our expertise in FinTech
                        business, combined with new generation’s outside-the-box thinking, KBTG aims to transform
                        into the best tech organization of Southeast Asia.
                    </p>
                    <button type="button" class="btn btn-light rounded-pill">More stories</button>
                </div>

            </div>

        </div>
    );
}
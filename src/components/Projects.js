import Image from 'next/image'

export default function Projects() {
    return (
        <section id='projects' className="p-5">
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center m-5">
                    <h1>our <span style={{ color: '#1ED0BD' }}>projects</span></h1>
                </div>
                <div className="d-flex justify-content-evenly">
                    <div className="card m-3" style={{
                        background: "#FAFAFA",
                        boxShadow: "15px 15px 20px rgba(57, 124, 116, 0.06), -15px -15px 20px #FFFFFF, -15px -15px 20px #FFFFFF",
                        borderRadius: '4px',
                    }}>
                        <Image src="/Sansiri.png" className="card-img-top" alt="..." width={407} height={232} />
                        <div className="card-body p-3">
                            <h5 className="card-title">Sansiri</h5>
                            <h6 className="card-subtitle mb-2" style={{ color: '#1ED0BD' }}>Digital Token for Everyone</h6>
                            <p className="card-text">Kubix is established by KASIKORN X, a company under KBTG, to operate as an Initial Coin Offering (ICO) portal. Broadening the horizon beyond....</p>
                        </div>
                    </div>
                    <div className="card m-3" style={{
                        background: "#FAFAFA",
                        boxShadow: "15px 15px 20px rgba(57, 124, 116, 0.06), -15px -15px 20px #FFFFFF, -15px -15px 20px #FFFFFF",
                        borderRadius: '4px',
                    }}>
                        <Image src="/Bentagro.png" className="card-img-top" alt="..." width={407} height={232} />
                        <div className="card-body p-3">
                            <h5 className="card-title">Betagro</h5>
                            <h6 className="card-subtitle mb-2" style={{ color: '#1ED0BD' }}>Digital Token for Everyone</h6>
                            <p className="card-text">Kubix is established by KASIKORN X, a company under KBTG, to operate as an Initial Coin Offering (ICO) portal. Broadening the horizon beyond....</p>
                        </div>
                    </div>
                    <div className="card m-3" style={{
                        background: "#FAFAFA",
                        boxShadow: "15px 15px 20px rgba(57, 124, 116, 0.06), -15px -15px 20px #FFFFFF, -15px -15px 20px #FFFFFF",
                        borderRadius: '4px',
                    }}>
                        <Image src="/Mercedes Benz.png" className="card-img-top" alt="..." width={407} height={232} />
                        <div className="card-body p-3">
                            <h5 className="card-title">Mercedes Benz</h5>
                            <h6 className="card-subtitle mb-2" style={{ color: '#1ED0BD' }}>Digital Token for Everyone</h6>
                            <p className="card-text">Kubix is established by KASIKORN X, a company under KBTG, to operate as an Initial Coin Offering (ICO) portal. Broadening the horizon beyond....</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5" >
                    <button type="button" className="btn btn-light rounded-pill" style={{ background: '#1ED0BD', color: '#ffffff' }}>All Project</button>
                </div>
            </div>
        </section>
    );
}
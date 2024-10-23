import Link from "next/link"

const AboutOne = () => {
    return (
        <section className="about-block">
            <div className="container">
                <div className="content rounded-2xl bg-linear-blue md:p-10 p-7">
                    <div className="heading flex max-lg:flex-col gap-y-4 md:pb-10 pb-8 border-b border-line">
                        <div className="w-full xl:w-5/12 lg:w-1/2">
                            <div className="tag text-label bg-blue text-white">About Us</div>
                            <h3 className="heading3 text-white mt-4">Master-class performer in app development for Seven years</h3>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="desc text-white">We are geared to building, developing, and deploying feature-rich apps, saving our clients a lot of time, effort, and money that goes into web development exercises. Our mobile app development experts are well-versed in using the latest and advanced technologies to deliver high-performance apps for the best user experience. </div>
                            <Link className="text-button-sm text-white border-b-2 border-white mt-4 inline-block hover:border-black hover:text-black duration-300" href="/company/about-us">View More</Link>
                        </div>
                    </div>
                    <div className="counter grid md:grid-cols-4 grid-cols-2 gap-y-6 md:pt-10 pt-8">
                        <div className="counter-item px-5 border-l border-white">
                            <div className="count-number heading3 text-white">7</div>
                            <div className="body1 mt-1 text-white">Years experiences</div>
                        </div>
                        <div className="counter-item px-5 border-l border-white">
                            <div className="flex items-center">
                                <div className="count-number heading3 text-white">1.8</div>
                                <span className="heading3 text-white">k</span>
                            </div>
                            <div className="body1 mt-1 text-white">Happy customers</div>
                        </div>
                        <div className="counter-item px-5 border-l border-white">
                            <div className="count-number heading3 text-white">460</div>
                            <div className="body1 mt-1 text-white">Project completed</div>
                        </div>
                        <div className="counter-item px-5 border-l border-white">
                            <div className="count-number heading3 text-white">15</div>
                            <div className="body1 mt-1 text-white">Awards achievement</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutOne
import SidebarWidget from '@/components/layouts/main/SidebarWidget'
import FeaturedPosts from '@/components/sections/FeaturedPosts'
import HeroSection from '@/components/sections/HeroSection'
import LatestPost from '@/components/sections/LatestPost'
import TrendingPosts from '@/components/sections/TrendingPosts'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <HeroSection />

            <section className="main-content">
                <div className="container-xl">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            {/* section header */}
                            <FeaturedPosts />
                            <div className="spacer" style={{
                                height: '30px',
                            }} />
                            {/* horizontal ads */}
                            <div className="ads-horizontal text-md-center">
                                <span className="ads-title">- Sponsored Ad -</span>
                                <a href="index.html#">
                                    <img src="https://placehold.co/600x100" alt="Advertisement" />
                                </a>
                            </div>
                            <div className="spacer" style={{
                                height: '30px',
                            }} />
                            {/* section header */}

                            <div className="spacer" style={{
                                height: '30px',
                            }} />
                            <TrendingPosts />

                            <div className="spacer" style={{
                                height: '30px',
                            }} />

                            <LatestPost />
                            {/* section header */}

                        </div>
                        <div className="col-lg-4">
                            {/* sidebar */}
                            <div className="sidebar">
                                <SidebarWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomePage
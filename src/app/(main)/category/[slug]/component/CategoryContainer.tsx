'use client'


import Pagination from '@/components/ui/Pagination'
import { getPostsBySlugCategoryPaginate } from '@/lib/db/post';
import { handleSubmitWithErrorHandling } from '@/utils/asyncHelpers';
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';

interface CategoryContainerProps {
    categorySlug: string;
}

const CategoryContainer = ({ categorySlug }: CategoryContainerProps) => {
    console.log(1);


    const getPostCategoryBySlug = async (slug: string) => {
        const { posts, total } = await handleSubmitWithErrorHandling(
            () => getPostsBySlugCategoryPaginate({
                slug: categorySlug || ''
            }),
            (err) => toast.error(err.message),
        ) as any
        console.log(posts, total);

    }



    return (
        <>
            <div className="row gy-4">
                <div className="col-sm-6">
                    {/* post */}
                    <div className="post post-grid rounded bordered">
                        <div className="thumb top-rounded">
                            <a href="category.html" className="category-badge position-absolute">
                                Lifestyle
                            </a>
                            <span className="post-format">
                                <i className="icon-picture" />
                            </span>
                            <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/posts/post-md-1.jpg" alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details">
                            <ul className="meta list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="category.html#">
                                        <img
                                            src="images/other/author-sm.png"
                                            className="author"
                                            alt="author"
                                        />
                                        Katen Doe
                                    </a>
                                </li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3">
                                <a href="blog-single.html">
                                    How To Become Better With Building In 1 Month
                                </a>
                            </h5>
                            <p className="excerpt mb-0">
                                I am so happy, my dear friend, so absorbed in the exquisite sense of
                                mere tranquil existence.
                            </p>
                        </div>
                        <div className="post-bottom clearfix d-flex align-items-center">
                            <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-pinterest" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-telegram-plane" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="far fa-envelope" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more-button float-end">
                                <a href="blog-single.html">
                                    <span className="icon-options" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    {/* post */}
                    <div className="post post-grid rounded bordered">
                        <div className="thumb top-rounded">
                            <a href="category.html" className="category-badge position-absolute">
                                Inspiration
                            </a>
                            <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/posts/post-md-2.jpg" alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details">
                            <ul className="meta list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="category.html#">
                                        <img
                                            src="images/other/author-sm.png"
                                            className="author"
                                            alt="author"
                                        />
                                        Katen Doe
                                    </a>
                                </li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3">
                                <a href="blog-single.html">
                                    Most Important Thing You Need To Know About Swim
                                </a>
                            </h5>
                            <p className="excerpt mb-0">
                                I am so happy, my dear friend, so absorbed in the exquisite sense of
                                mere tranquil existence.
                            </p>
                        </div>
                        <div className="post-bottom clearfix d-flex align-items-center">
                            <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-pinterest" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-telegram-plane" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="far fa-envelope" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more-button float-end">
                                <a href="blog-single.html">
                                    <span className="icon-options" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    {/* post */}
                    <div className="post post-grid rounded bordered">
                        <div className="thumb top-rounded">
                            <a href="category.html" className="category-badge position-absolute">
                                Fashion
                            </a>
                            <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/posts/post-md-3.jpg" alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details">
                            <ul className="meta list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="category.html#">
                                        <img
                                            src="images/other/author-sm.png"
                                            className="author"
                                            alt="author"
                                        />
                                        Katen Doe
                                    </a>
                                </li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3">
                                <a href="blog-single.html">
                                    The Secrets To Finding Class Tools For Your Dress
                                </a>
                            </h5>
                            <p className="excerpt mb-0">
                                I am so happy, my dear friend, so absorbed in the exquisite sense of
                                mere tranquil existence.
                            </p>
                        </div>
                        <div className="post-bottom clearfix d-flex align-items-center">
                            <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-pinterest" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-telegram-plane" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="far fa-envelope" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more-button float-end">
                                <a href="blog-single.html">
                                    <span className="icon-options" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    {/* post */}
                    <div className="post post-grid rounded bordered">
                        <div className="thumb top-rounded">
                            <a href="category.html" className="category-badge position-absolute">
                                Lifestyle
                            </a>
                            <span className="post-format">
                                <i className="icon-camrecorder" />
                            </span>
                            <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/posts/post-md-4.jpg" alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details">
                            <ul className="meta list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="category.html#">
                                        <img
                                            src="images/other/author-sm.png"
                                            className="author"
                                            alt="author"
                                        />
                                        Katen Doe
                                    </a>
                                </li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3">
                                <a href="blog-single.html">
                                    How I Improved My Fashion Style In One Day
                                </a>
                            </h5>
                            <p className="excerpt mb-0">
                                I am so happy, my dear friend, so absorbed in the exquisite sense of
                                mere tranquil existence.
                            </p>
                        </div>
                        <div className="post-bottom clearfix d-flex align-items-center">
                            <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-pinterest" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-telegram-plane" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="far fa-envelope" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more-button float-end">
                                <a href="blog-single.html">
                                    <span className="icon-options" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    {/* post */}
                    <div className="post post-grid rounded bordered">
                        <div className="thumb top-rounded">
                            <a href="category.html" className="category-badge position-absolute">
                                Trending
                            </a>
                            <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/posts/post-md-5.jpg" alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details">
                            <ul className="meta list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="category.html#">
                                        <img
                                            src="images/other/author-sm.png"
                                            className="author"
                                            alt="author"
                                        />
                                        Katen Doe
                                    </a>
                                </li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3">
                                <a href="blog-single.html">
                                    3 Easy Ways To Make Your iPhone Faster
                                </a>
                            </h5>
                            <p className="excerpt mb-0">
                                I am so happy, my dear friend, so absorbed in the exquisite sense of
                                mere tranquil existence.
                            </p>
                        </div>
                        <div className="post-bottom clearfix d-flex align-items-center">
                            <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-pinterest" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-telegram-plane" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="far fa-envelope" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more-button float-end">
                                <a href="blog-single.html">
                                    <span className="icon-options" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    {/* post */}
                    <div className="post post-grid rounded bordered">
                        <div className="thumb top-rounded">
                            <a href="category.html" className="category-badge position-absolute">
                                Fashion
                            </a>
                            <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/posts/post-md-6.jpg" alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details">
                            <ul className="meta list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="category.html#">
                                        <img
                                            src="images/other/author-sm.png"
                                            className="author"
                                            alt="author"
                                        />
                                        Katen Doe
                                    </a>
                                </li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3">
                                <a href="blog-single.html">
                                    Wondering How To Make Your Hair Style Rock?
                                </a>
                            </h5>
                            <p className="excerpt mb-0">
                                I am so happy, my dear friend, so absorbed in the exquisite sense of
                                mere tranquil existence.
                            </p>
                        </div>
                        <div className="post-bottom clearfix d-flex align-items-center">
                            <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-pinterest" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-telegram-plane" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="far fa-envelope" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more-button float-end">
                                <a href="blog-single.html">
                                    <span className="icon-options" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    {/* post */}
                    <div className="post post-grid rounded bordered">
                        <div className="thumb top-rounded">
                            <a href="category.html" className="category-badge position-absolute">
                                How To
                            </a>
                            <span className="post-format">
                                <i className="icon-picture" />
                            </span>
                            <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/posts/post-md-7.jpg" alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details">
                            <ul className="meta list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="category.html#">
                                        <img
                                            src="images/other/author-sm.png"
                                            className="author"
                                            alt="author"
                                        />
                                        Katen Doe
                                    </a>
                                </li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3">
                                <a href="blog-single.html">
                                    How To Make More Construction By Doing Less
                                </a>
                            </h5>
                            <p className="excerpt mb-0">
                                I am so happy, my dear friend, so absorbed in the exquisite sense of
                                mere tranquil existence.
                            </p>
                        </div>
                        <div className="post-bottom clearfix d-flex align-items-center">
                            <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-pinterest" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-telegram-plane" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="far fa-envelope" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more-button float-end">
                                <a href="blog-single.html">
                                    <span className="icon-options" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    {/* post */}
                    <div className="post post-grid rounded bordered">
                        <div className="thumb top-rounded">
                            <a href="category.html" className="category-badge position-absolute">
                                Culture
                            </a>
                            <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/posts/post-md-8.jpg" alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details">
                            <ul className="meta list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="category.html#">
                                        <img
                                            src="images/other/author-sm.png"
                                            className="author"
                                            alt="author"
                                        />
                                        Katen Doe
                                    </a>
                                </li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3">
                                <a href="blog-single.html">
                                    An Incredibly Easy Method That Works For All
                                </a>
                            </h5>
                            <p className="excerpt mb-0">
                                I am so happy, my dear friend, so absorbed in the exquisite sense of
                                mere tranquil existence.
                            </p>
                        </div>
                        <div className="post-bottom clearfix d-flex align-items-center">
                            <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-pinterest" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-telegram-plane" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="far fa-envelope" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more-button float-end">
                                <a href="blog-single.html">
                                    <span className="icon-options" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    {/* post */}
                    <div className="post post-grid rounded bordered">
                        <div className="thumb top-rounded">
                            <a href="category.html" className="category-badge position-absolute">
                                Inspiration
                            </a>
                            <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/posts/post-md-9.jpg" alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details">
                            <ul className="meta list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="category.html#">
                                        <img
                                            src="images/other/author-sm.png"
                                            className="author"
                                            alt="author"
                                        />
                                        Katen Doe
                                    </a>
                                </li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3">
                                <a href="blog-single.html">
                                    10 Ways To Immediately Start Selling Furniture
                                </a>
                            </h5>
                            <p className="excerpt mb-0">
                                I am so happy, my dear friend, so absorbed in the exquisite sense of
                                mere tranquil existence.
                            </p>
                        </div>
                        <div className="post-bottom clearfix d-flex align-items-center">
                            <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-pinterest" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-telegram-plane" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="far fa-envelope" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more-button float-end">
                                <a href="blog-single.html">
                                    <span className="icon-options" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    {/* post */}
                    <div className="post post-grid rounded bordered">
                        <div className="thumb top-rounded">
                            <a href="category.html" className="category-badge position-absolute">
                                Lifestyle
                            </a>
                            <span className="post-format">
                                <i className="icon-earphones" />
                            </span>
                            <a href="blog-single.html">
                                <div className="inner">
                                    <img src="images/posts/post-md-10.jpg" alt="post-title" />
                                </div>
                            </a>
                        </div>
                        <div className="details">
                            <ul className="meta list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="category.html#">
                                        <img
                                            src="images/other/author-sm.png"
                                            className="author"
                                            alt="author"
                                        />
                                        Katen Doe
                                    </a>
                                </li>
                                <li className="list-inline-item">29 March 2021</li>
                            </ul>
                            <h5 className="post-title mb-3 mt-3">
                                <a href="blog-single.html">
                                    Now You Can Have Your Thoughts Done Safely
                                </a>
                            </h5>
                            <p className="excerpt mb-0">
                                I am so happy, my dear friend, so absorbed in the exquisite sense of
                                mere tranquil existence.
                            </p>
                        </div>
                        <div className="post-bottom clearfix d-flex align-items-center">
                            <div className="social-share me-auto">
                                <button className="toggle-button icon-share" />
                                <ul className="icons list-unstyled list-inline mb-0">
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-pinterest" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="fab fa-telegram-plane" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html#">
                                            <i className="far fa-envelope" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="more-button float-end">
                                <a href="blog-single.html">
                                    <span className="icon-options" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination
                currentPage={10}
                totalPages={50}
                onPageChange={(p) => console.log("Go page:", p)}
            />
        </>
    )
}

export default CategoryContainer
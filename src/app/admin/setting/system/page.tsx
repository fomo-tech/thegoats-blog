"use client";

import ImageUploader from "@/components/ImageUploader";
import PageContent from "@/components/ui/admin/PageContent";
import { getSettings, upsertSettings } from "@/services/setting";
import { ISetting } from "@/types/setting";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormValues = {
  SEO_PAGE_TITLE: string;
  DES_PAGE: string;
  FOOTER_DES: string;
  LOGO: string;
  FACEBOOK: string;
  TELE: string;
  INSTAGRAM: string;
  TIKTOK: string;
  YOUTUBE: string;
};

const SettingSystem = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const getDataSettings = async () => {
    setLoading(true);
    try {
      const data = await getSettings(); // giả sử getSettings trả về array [{ key, value }]
      reset(data);
    } catch (error) {
      console.error("Error getDataSettings:", error);
    }
    setLoading(false);
  };

  const onSubmit = async (data: FormValues) => {
    // Map ra array các setting theo đúng interface ISetting
    const settings: ISetting[] = Object.entries(data).map(([key, value]) => ({
      key: key as ISetting["key"],
      value,
    }));

    console.log("Settings to save:", settings);
    setLoading(true);
    try {
      await upsertSettings(settings);
    } catch (error: any) {
      console.log(error);

      setLoading(false);
      toast.error(error?.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDataSettings();
  }, []);
  return (
    <PageContent loading={loading} loadingTip="Loading...">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="card">
            <div className="card-header">
              <h5>Cài đặt web</h5>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-12 gap-6">
                <form onSubmit={handleSubmit(onSubmit)} className="contents">
                  {/* Cột trái */}
                  <div className="col-span-12 md:col-span-6">
                    <div className="mb-4">
                      <label className="form-label" htmlFor="seoTitle">
                        SEO Tiltle
                      </label>
                      <textarea
                        rows={2}
                        id="seoTitle"
                        placeholder="Enter SEO title"
                        className="form-control"
                        {...register("SEO_PAGE_TITLE", {
                          required: "Vui lòng nhập SEO title",
                        })}
                      />
                      {errors.SEO_PAGE_TITLE && (
                        <small className="text-danger">
                          {errors.SEO_PAGE_TITLE.message}
                        </small>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="form-label" htmlFor="seoDescription">
                        SEO Description
                      </label>
                      <textarea
                        rows={3}
                        id="seoDescription"
                        placeholder="Enter SEO description"
                        className="form-control"
                        {...register("DES_PAGE", {
                          required: "Vui lòng nhập SEO description",
                        })}
                      />
                      {errors.DES_PAGE && (
                        <small className="text-danger">
                          {errors.DES_PAGE.message}
                        </small>
                      )}
                    </div>
                  </div>

                  {/* Cột phải */}
                  <div className="col-span-12 md:col-span-6">
                    <div className="mb-4">
                      <label className="form-label">Footer Description</label>
                      <textarea
                        rows={2}
                        className="form-control"
                        placeholder="Text"
                        {...register("FOOTER_DES")}
                      />
                      {errors.FOOTER_DES && (
                        <small className="text-danger">
                          {errors.FOOTER_DES.message}
                        </small>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="block text-[14px] font-medium text-[#374151] mb-3">
                        Logo Web
                      </label>
                      <div className="border-2 border-dashed border-[#D1D5DB] rounded-md p-6 text-center text-[14px] text-[#6B7280] hover:border-[#2563EB] hover:text-[#2563EB] cursor-pointer transition">
                        <ImageUploader
                          initialUrl={watch("LOGO")}
                          onSuccess={(url) => setValue("LOGO", url)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Button submit (nên để ở dưới cùng form) */}
                  <div className="col-span-12">
                    <button type="submit" className="btn btn-primary mb-4">
                      Gửi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5>Cài đặt SNS</h5>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-12 gap-6">
                <form onSubmit={handleSubmit(onSubmit)} className="contents">
                  {/* Cột trái */}
                  <div className="col-span-12 md:col-span-6">
                    <div className="mb-4">
                      <label className="form-label" htmlFor="seoTitle">
                        Link Facebook
                      </label>
                      <textarea
                        rows={2}
                        id="seoTitle"
                        placeholder="Nhập link"
                        className="form-control"
                        {...register("FACEBOOK")}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label" htmlFor="seoTitle">
                        Link Instagrams
                      </label>
                      <textarea
                        rows={2}
                        id="seoTitle"
                        placeholder="Nhập link"
                        className="form-control"
                        {...register("INSTAGRAM")}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label" htmlFor="seoTitle">
                        Link Telegrams
                      </label>
                      <textarea
                        rows={2}
                        id="seoTitle"
                        placeholder="Nhập link"
                        className="form-control"
                        {...register("TELE")}
                      />
                    </div>
                  </div>

                  {/* Cột phải */}
                  <div className="col-span-12 md:col-span-6">
                    <div className="mb-4">
                      <label className="form-label" htmlFor="seoTitle">
                        Link Youtube
                      </label>
                      <textarea
                        rows={2}
                        id="seoTitle"
                        placeholder="Nhập link"
                        className="form-control"
                        {...register("YOUTUBE")}
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="seoTitle">
                          Link Tiktok
                        </label>
                        <textarea
                          rows={2}
                          id="seoTitle"
                          placeholder="Nhập link"
                          className="form-control"
                          {...register("TIKTOK")}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Button submit (nên để ở dưới cùng form) */}
                  <div className="col-span-12">
                    <button type="submit" className="btn btn-primary mb-4">
                      Gửi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* <div className="card">
            <div className="card-header">
              <h5>Inline Form</h5>
            </div>
            <div className="card-body">
              <form className="flex flex-wrap *:flex-[0_0_auto] *:w-auto gap-2 items-center">
                <div className="col-12">
                  <label className="sr-only" htmlFor="inlineFormInputName">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputName"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="col-12">
                  <label
                    className="sr-only"
                    htmlFor="inlineFormInputGroupUsername"
                  >
                    Username
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">@</div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label className="sr-only" htmlFor="inlineFormSelectPref">
                    Preference
                  </label>
                  <select className="form-select" id="inlineFormSelectPref">
                    <option selected>Choose...</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineFormCheck"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineFormCheck"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5>Form Grid</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12">
                    <div
                      className="alert alert-primary flex items-center"
                      role="alert"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: "none" }}
                      >
                        <symbol
                          id="info-fill"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                        </symbol>
                      </svg>
                      <svg
                        className="bi flex-shrink-0 me-2"
                        width={24}
                        height={24}
                      >
                        <use xlinkHref="#info-fill" />
                      </svg>
                      <div>
                        When working with the Bootstrap grid system, be sure to
                        place form elements within column classes.
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 mb-4">
                    <label className="form-label" htmlFor="inputEmail4">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6 mb-4">
                    <label className="form-label" htmlFor="inputPassword4">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="inputAddress">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="inputAddress2">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-12 md:col-span-6 mb-4">
                    <label className="form-label" htmlFor="inputCity">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-4 mb-4">
                    <label className="form-label" htmlFor="inputState">
                      State
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>select</option>
                      <option>Large select</option>
                    </select>
                  </div>
                  <div className="col-span-12 md:col-span-2 mb-4">
                    <label className="form-label" htmlFor="inputZip">
                      Zip
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5>Horizontal Form</h5>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-6">
                  <h6>Horizontal Form Example</h6>
                  <hr className="my-4 border-0 border-t border-theme-border dark:border-themedark-border" />
                  <form>
                    <div className="grid grid-cols-12 gap-6 mb-4">
                      <label
                        htmlFor="inputEmail3"
                        className="col-span-12 sm:col-span-3 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-span-12 sm:col-span-9">
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail3"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6 mb-4">
                      <label
                        htmlFor="inputPassword3"
                        className="col-span-12 sm:col-span-3 col-form-label"
                      >
                        Password
                      </label>
                      <div className="col-span-12 sm:col-span-9">
                        <input
                          type="password"
                          className="form-control"
                          id="inputPassword3"
                        />
                      </div>
                    </div>
                    <fieldset>
                      <div className="grid grid-cols-12 gap-6 mb-4">
                        <div className="col-form-label col-span-12 sm:col-span-3 pt-0">
                          Radios
                        </div>
                        <div className="col-span-12 sm:col-span-9">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios1"
                              defaultValue="option1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gridRadios1"
                            >
                              First radio
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios2"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gridRadios2"
                            >
                              Second radio
                            </label>
                          </div>
                          <div className="form-check disabled">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios3"
                              defaultValue="option3"
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gridRadios3"
                            >
                              Third disabled radio
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="grid grid-cols-12 gap-6 mb-4">
                      <div className="col-form-label col-span-12 sm:col-span-3 pt-0">
                        Checkbox
                      </div>
                      <div className="col-span-12 sm:col-span-9">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck1"
                          >
                            Example checkbox
                          </label>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-4">
                      Sign in
                    </button>
                  </form>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <h6>Horizontal Form Label Sizing</h6>
                  <hr className="my-4 border-0 border-t border-theme-border dark:border-themedark-border" />
                  <div className="grid grid-cols-12 gap-6 mb-4">
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-span-12 sm:col-span-2 col-form-label-sm text-sm"
                    >
                      Email
                    </label>
                    <div className="col-span-12 sm:col-span-10">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder="col-form-label-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-6 mb-4">
                    <label
                      htmlFor="colFormLabel"
                      className="col-span-12 sm:col-span-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-span-12 sm:col-span-10">
                      <input
                        type="email"
                        className="form-control"
                        id="colFormLabel"
                        placeholder="col-form-label"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-6">
                    <label
                      htmlFor="colFormLabelLg"
                      className="col-span-12 sm:col-span-2 col-form-label-lg text-lg"
                    >
                      Email
                    </label>
                    <div className="col-span-12 sm:col-span-10">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="colFormLabelLg"
                        placeholder="col-form-label-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5>Checks and Radios</h5>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6">
                  <h5>Checkboxes</h5>
                  <hr className="my-4 border-0 border-t border-theme-border dark:border-themedark-border" />
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheck1"
                    />
                    <label className="form-check-label" htmlFor="customCheck1">
                      Check this custom checkbox
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h5>Switches</h5>
                  <hr className="my-4 border-0 border-t border-theme-border dark:border-themedark-border" />
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customswitch1"
                    />
                    <label className="form-check-label" htmlFor="customswitch1">
                      Check this custom Switches
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h5>Radios</h5>
                  <hr className="my-4 border-0 border-t border-theme-border dark:border-themedark-border" />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Default radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Default checked radio
                    </label>
                  </div>
                  <h5 className="mt-3">Inline</h5>
                  <hr className="my-4 border-0 border-t border-theme-border dark:border-themedark-border" />
                  <div className="form-check inline-block mr-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault11"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault11"
                    >
                      Default radio
                    </label>
                  </div>
                  <div className="form-check inline-block mr-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault12"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault12"
                    >
                      Default checked radio
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h5>Range</h5>
                  <hr className="my-4 border-0 border-t border-theme-border dark:border-themedark-border" />
                  <label className="form-label" htmlFor="customRange1">
                    Example range
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    id="customRange1"
                  />
                  <label className="form-label" htmlFor="customRange2">
                    Min and max
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min={0}
                    max={5}
                    id="customRange2"
                  />
                  <label className="form-label" htmlFor="customRange3">
                    Steps
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min={0}
                    max={5}
                    step="0.5"
                    id="customRange3"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </PageContent>
  );
};

export default SettingSystem;

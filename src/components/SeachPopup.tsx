"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface SeachPopupProps {
  isOpen?: boolean;
  onClose: () => void;
}

const SeachPopup: React.FC<SeachPopupProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("q") as string;
    if (query)
      router.push(`/search?q=${encodeURIComponent(query)}`, { scroll: true });
    e.currentTarget.reset();
  };

  // ESC key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={clsx("search-popup", {
        visible: isOpen,
      })}
    >
      {/* close button */}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      />
      {/* content */}
      <div className="search-content">
        <div className="text-center">
          <h3 className="mb-4 mt-0">Tìm kiếm với từ khoá của bạn</h3>
        </div>
        {/* form */}
        <form className="d-flex search-form" onSubmit={handleSubmit}>
          <input
            name="q"
            className="form-control me-2"
            type="search"
            placeholder="Tìm kiếm ..."
            aria-label="Search"
          />
          <button className="btn btn-default btn-lg" type="submit">
            <i className="icon-magnifier" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SeachPopup;

"use client";

import React, { useState, useEffect, useRef } from "react";
import avt_default from "@/assets/icons/avatar-default.png";
import CommentForm from "./CommentForm";
import { getCommentsByPostId } from "@/lib/db/post";
import { useGlobalStore } from "@/store/useGlobalStore";

interface CommentItem {
  content: string;
  created_at: string;
  id: string;
  name: string;
  post_id: string;
}

interface ListCommentProps {
  postId: string;
}
const ListComment = ({ postId }: ListCommentProps) => {
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const { isCallBaclListComment } = useGlobalStore();
  const [listComment, setListComment] = useState<CommentItem[]>([]);

  const getComments = async (postId: string) => {
    try {
      const data = await getCommentsByPostId({ postId });
      if (data) setListComment(data.comments);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  const handleReplyClick = (id: number) => {
    setReplyTo(replyTo === id ? null : id); // toggle
  };

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setReplyTo(null);
      }
    };

    if (replyTo !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [replyTo]);

  useEffect(() => {
    if (postId) getComments(postId);
  }, [postId, isCallBaclListComment]);
  return (
    <div className="comments bordered padding-30 rounded">
      <ul className="comments">
        {listComment.map((comment) => (
          <li key={comment.id} className={`comment rounded`}>
            <div className="thumb">
              <img src={avt_default.src} alt="Avt Default" />
            </div>
            <div className="details">
              <h4 className="name">
                <a href="javacript:void(0)">{comment.name}</a>
              </h4>
              <span className="date">
                {new Date(comment.created_at)?.toLocaleString()}
              </span>
              <p>{comment.content}</p>
              {/* <button
                type="button"
                className="btn btn-default btn-sm"
                onClick={() => handleReplyClick(comment.id)}
              >
                Reply
              </button> */}

              {/* Hiện form comment khi bấm Reply */}
              {/* {replyTo === comment.id && (
                                <div className="mt-3" ref={formRef}>
                                    <CommentForm />
                                </div>
                            )} */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComment;

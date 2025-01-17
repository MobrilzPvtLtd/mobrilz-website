import React from "react";
import Link from "next/link";

import { convertToSlug } from "../../common/utils";

export default function PostCardOne({ data }) {
  return (
    <div className="post-card-one">
      <div className="post-card-one__date">
        <h5>05</h5>
        <p>Feb</p>
      </div>
      <div className="post-card-one__content">
        <div className="post-card-one__content__info">
          <p>
            by <span>{data.author}</span>
          </p>
          <Link
            href={
              process.env.NEXT_PUBLIC_PUBLIC_URL +
              "/blog/category/" +
              convertToSlug(data.category)
            }
          >
            <span>{data.category}</span>
          </Link>
        </div>
        <Link
          href={process.env.NEXT_PUBLIC_PUBLIC_URL + "/blog/post/[slug]"}
          as={process.env.NEXT_PUBLIC_PUBLIC_URL + "/blog/post/" + data.slug}
        >
          <span className="post-card-one__content__title">{data.title}</span>
        </Link>
      </div>
    </div>
  );
}

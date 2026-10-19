import { FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  if (!news) return null;

  const {id, title, rating, total_view, author, thumbnail_url, details } = news;

  const publishedDate = author?.published_date
    ? new Date(author.published_date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      })
    : "";

  return (
    <div className="mb-5">
      <article className=" card w-full min-w-0 max-w-none rounded-lg border border-base-200 bg-base-100 shadow-sm">
        {/* Author */}
        <div className="flex items-center gap-2 px-3 pt-2">
          <img
            src={author?.img}
            alt={author?.name || "Author"}
            className="h-8 w-8 shrink-0 rounded-full object-cover"
          />

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-xs font-semibold">
              {author?.name || "Unknown Author"}
            </h3>
            <p className="text-[10px] text-base-content/60">{publishedDate}</p>
          </div>
        </div>

        {/* Title */}
        <div className="px-3 pt-3">
          <h2 className="line-clamp-2 text-sm font-bold leading-5">{title}</h2>
        </div>

        {/* Full-width image */}
        <div className="mt-3 w-full">
          <img
            src={thumbnail_url}
            alt={title}
            className="block h-auto max-h-64 min-h-36 w-full rounded-sm object-cover"
          />
        </div>

        {/* Description */}
        <div className="px-3 pb-2 pt-3">
          <p className="line-clamp-4 text-[11px] leading-4 text-base-content/60">
            {publishedDate} | {details}
          </p>

          <button
            type="button"
            className="mt-0.5 text-xs font-semibold text-orange-600 hover:underline"
            onClick={() => console.log("Read news:", news.id)}
          >
            <Link to={`/newsDetails/${id}`}>Read More</Link>
          </button>
        </div>

        {/* Divider */}
        <div className="mx-3 border-t border-base-200" />

        {/* Rating and views */}
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`text-xs ${
                  star <= (rating?.number || 0)
                    ? "text-orange-400"
                    : "text-base-300"
                }`}
              />
            ))}

            <span className="ml-1 text-[10px] text-base-content/70">
              {rating?.number ?? 0}.0
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-base-content/60">
            <FaEye className="text-sm" />
            <span>{(total_view || 0).toLocaleString()}</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsCard;

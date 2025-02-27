import { Link } from "react-router-dom";

const PostItem = ({ post, username, userId }) => {
  const profileLink = userId ? `/profile/${userId}` : `/profile/${post?.user?._id}`;

  const truncateDescription = (description, wordLimit) => {
    if (!description) return "";
    const words = description.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : description;
  };

  return (
    <div className="w-full mx-auto p-4  rounded-lg bg-white">
      {/* Image */}
      {post?.image?.url && (
        <img
          src={post.image.url}
          alt={post?.title || "Post"}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      {/* Title */}
      <h3 className="text-lg font-bold text-black mb-2">{post?.title}</h3>

      {/* Username */}
      <div className="text-gray-800 text-sm mb-2">
        Posted by{" "}
        <Link to={profileLink} className="text-gray-600 hover:text-black underline">
          {username || post?.user?.username}
        </Link>
      </div>

      {/* Post Date */}
      <div className="text-gray-500 text-xs mb-2">
        {new Date(post?.createdAt).toDateString()}
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">
        {truncateDescription(post?.description, 30)}
      </p>

      {/* Read More */}
      <Link
        to={`/posts/details/${post?._id}`}
        className="text-gray-800 hover:text-black font-medium"
      >
        Read More
      </Link>
    </div>
  );
};

export default PostItem;




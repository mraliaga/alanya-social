import "./post.css";
import { MoreVert as MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/1.jpeg" className="postProfileImg" />
            <span className="postUsername">Ali Aga</span>
            <span className="postUsername">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first post</span>
          <img src="assets/post/1.jpeg" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">28 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">8 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

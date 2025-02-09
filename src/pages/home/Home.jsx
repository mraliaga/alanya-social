import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed"; // Feed bileşenini ekleyin
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
      </div>
      <Feed />
      <Rightbar />
    </>
  );
}

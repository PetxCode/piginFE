import EmblaCarousel from "@/static/slider";
import { EmblaOptionsType } from "embla-carousel";

import "./base.css";
import "./sandbox.css";
import "./embla.css";
import { useSelector } from "react-redux";
import { useOneUser } from "@/hooks/useWord";

const Slider = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  // const SLIDE_COUNT = 5;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const user = useSelector((el: any) => el.user);
  const readUserFriend: any = useOneUser(user?._id);

  return (
    <div>
      {readUserFriend?.data?.friends.length > 0 ? (
        <EmblaCarousel
          slides={readUserFriend?.data?.friends}
          options={OPTIONS}
        />
      ) : (
        <div>You have no friends yet</div>
      )}
    </div>
  );
};

export default Slider;

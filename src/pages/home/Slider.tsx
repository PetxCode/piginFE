import EmblaCarousel from "@/static/slider";
import { EmblaOptionsType } from "embla-carousel";

import "./base.css";
import "./sandbox.css";
import "./embla.css";
const Slider = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};

export default Slider;

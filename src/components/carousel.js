import React, { useEffect } from "react";
import Button from "./button";
import "../css/carousel.css";

const Carousel = () => {
  useEffect(() => {
    console.log("reached");
    document.getElementsByClassName("carousel-item")[0].classList.add("active");
    let total = document.getElementsByClassName("carousel-item").length;
    let current = 0;
    document.getElementById("moveRight").addEventListener("click", function () {
      let next = current;
      current = current + 1;
      setSlide(next, current);
    });
    document.getElementById("moveLeft").addEventListener("click", function () {
      let prev = current;
      current = current - 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next) {
      let slide = current;
      if (next > total - 1) {
        slide = 0;
        current = 0;
      }
      if (next < 0) {
        slide = total - 1;
        current = total - 1;
      }
      document
        .getElementsByClassName("carousel-item")
        [prev].classList.remove("active");
      document
        .getElementsByClassName("carousel-item")
        [slide].classList.add("active");
      setTimeout(function () {}, 800);

      console.log("current " + current);
      console.log("prev " + prev);
    }
  }, []);

  return (
    <div class="carousel">
      <div class="carousel__nav">
        <span id="moveLeft" class="carousel__arrow">
          <svg
            class="carousel__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
          </svg>
        </span>
        <span id="moveRight" class="carousel__arrow">
          <svg
            class="carousel__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
          </svg>
        </span>
      </div>
      <div class="carousel-item carousel-item--1">
        <div class="carousel-item__image"></div>
        <div class="carousel-item__info">
          <div class="carousel-item__container">
            <h2>Portfolio</h2>

            <h2 class="carousel-item__subtitle">Face Solution</h2>
            <h1 class="carousel-item__title">Origami</h1>
            <p class="carousel-item__description">
              A collection of skin care products formulated with cutting-edge
              technology to help you achieve the results you desire for your
              face.
            </p>

            <Button
              title="Discover"
              class="carousel-item__btn"
              url="https://origami-site.vercel.app"
            />
            <Button
              title="View Code"
              class="carousel-item__btn"
              url="https://github.com/UlijahCharles/origami"
            />
          </div>
        </div>
      </div>
      <div class="carousel-item carousel-item--2">
        <div class="carousel-item__image"></div>
        <div class="carousel-item__info">
          <div class="carousel-item__container">
            <h2 class="carousel-item__subtitle">Minimal Apple </h2>
            <h1 class="carousel-item__title">AirPods Max</h1>
            <p class="carousel-item__description">
              Redesign of the Apple web page for AirPods Max, maintaining the
              brand's minimalistic style but with a new vision.
            </p>
            <Button
              title="Discover"
              class="carousel-item__btn"
              url="https://apple-airpod-max.vercel.app"
            />
            <Button
              title="View Code"
              class="carousel-item__btn"
              url="https://github.com/UlijahCharles/Apple-Airpod-Max"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

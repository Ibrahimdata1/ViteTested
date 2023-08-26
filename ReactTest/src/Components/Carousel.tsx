const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide container-lg p-0 my-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ maxHeight: "300px" }}>
          <img
            src="/images/discount_banner.jpeg"
            className="d-block w-100 h-100 object-fit-fill"
            alt="discountBanner"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
